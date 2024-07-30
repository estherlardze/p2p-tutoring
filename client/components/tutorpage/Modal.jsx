import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, MultiSelect } from "@mantine/core";
import { db } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  doc,
  getDocs,
  updateDoc,
  arrayUnion,
  collection,
  query,
  where,
} from "firebase/firestore";

const Popup = ({ tutor }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [bookingInfo, setBookingInfo] = useState({
    studentEmail: "",
    tutorialType: "",
    course: [],
    contact: "",
    date: "",
    time: "",
    message: "",
    location: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setBookingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "studentEmail") {
      try {
        const q = query(
          collection(db, "Students"),
          where("studentEmail", "==", value)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const studentData = querySnapshot.docs[0].data();
          setBookingInfo((prev) => ({
            ...prev,
            name: studentData.firstName + " " + studentData.lastName || "",
            email: studentData.studentEmail || "",
          }));
        } else {
          setBookingInfo((prev) => ({
            ...prev,
            name: "",
            email: "",
          }));
        }
      } catch (error) {
        console.error("Error fetching student details: ", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      studentEmail,
      tutorialType,
      course,
      date,
      time,
      message,
      contact,
      location,
    } = bookingInfo;

    try {
      if (
        !studentEmail ||
        !tutorialType ||
        !course.length ||
        !date ||
        !time ||
        !contact ||
        !message ||
        (tutorialType === "in-person" && !location)
      ) {
        toast.error("Please fill out all fields");
        return;
      }

      const studentQuery = query(
        collection(db, "Students"),
        where("studentEmail", "==", studentEmail)
      );
      const studentSnapshot = await getDocs(studentQuery);

      if (studentSnapshot.empty) {
        toast.error("You need to sign up to book a tutor");
        return;
      }

      const studentDoc = studentSnapshot.docs[0];
      const studentData = studentDoc.data();
      const studentRef = doc(db, "Students", studentDoc.id);

      await updateDoc(studentRef, {
        tutorials: arrayUnion({
          tutorName: tutor.firstName + " " + tutor.lastName,
          tutorEmail: tutor.studentEmail,
          tutorialType,
          course,
          date,
          time,
          contact,
          message,
          location,
        }),
      });

      const tutorRef = doc(db, "Students", tutor.id);
      await updateDoc(tutorRef, {
        tutorials: arrayUnion({
          studentName: studentData.firstName + " " + studentData.lastName,
          studentEmail,
          tutorialType,
          course,
          contact,
          date,
          time,
          message,
          location,
        }),
      });

      toast.success("Booking was successful, the tutor will be in touch");
      close();
    } catch (error) {
      console.error("Error submitting booking: ", error);
      toast.error("Failed to submit booking");
    }
  };

  return (
    <div>
      <button onClick={open} className="text-blue">
        Book Session
      </button>
      <ToastContainer position="top-center" draggable />
      <Modal
        opened={opened}
        onClose={close}
        title={`Message to ${tutor.name}`}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="studentEmail" className="font-semibold">
              Student Email
            </label>
            <input
              type="email"
              name="studentEmail"
              id="studentEmail"
              placeholder="Enter your student email"
              className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
              value={bookingInfo.studentEmail}
              onChange={handleChange}
            />
          </div>

          <MultiSelect
            label="Course"
            placeholder="Select a course you want to learn"
            data={tutor.courses}
            value={bookingInfo.course}
            onChange={(value) =>
              setBookingInfo({ ...bookingInfo, course: value })
            }
          />

          <div className="mt-2">
            <label htmlFor="contact" className="font-semibold">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="active call number"
              className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
              value={bookingInfo.contact}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="date" className="font-semibold">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
              value={bookingInfo.date}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="time" className="font-semibold">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
              value={bookingInfo.time}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <h1 className="font-semibold">How would you like to take a lesson?</h1>
            <div className="text-gray-1 flex gap-2 text-sm">
              {tutor.tutorialType?.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="radio"
                    name="tutorialType"
                    id={item.value}
                    value={item.value}
                    checked={bookingInfo.tutorialType === item.value}
                    onChange={handleChange}
                  />
                  <h1>{item.label}</h1>
                </div>
              ))}
            </div>
          </div>

          {bookingInfo.tutorialType === "in-person" && (
            <div className="mt-2">
              <label htmlFor="location" className="font-semibold">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter the location"
                className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
                value={bookingInfo.location}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="my-4">
            <h3 className="mb-2 font-semibold">
              Tell your tutor what you like to learn.
            </h3>
            <textarea
              name="message"
              rows={4}
              id="message"
              placeholder="What is your challenge in the course"
              className="w-full px-3 py-2 border text-black/80 border-black/25 rounded-md outline-blue/40"
              value={bookingInfo.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="my-3 bg-blue border-2 font-semibold border-blue hover:text-black hover:bg-white text-white px-4 py-2 rounded-sm w-full transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Popup;
