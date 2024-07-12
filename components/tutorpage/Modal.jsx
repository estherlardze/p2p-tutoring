import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, MultiSelect } from "@mantine/core";
import { db } from "@/config/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Popup = ({ tutor }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [bookingInfo, setBookingInfo] = useState({
    studentId: "",
    email: "",
    name: "",
    tutorialType: "",
    course: [],
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingInfo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { studentId, email, name, tutorialType, course, date, time, message } = bookingInfo;

    try {
      if (!studentId || !email || !name || !tutorialType || !course.length || !date || !time || !message) {
        alert("Please fill out all fields");
        return;
      }

      console.log("Booking Info:", bookingInfo);

      const tutorRef = doc(db, "Students", tutor.id);
      await updateDoc(tutorRef, {
        tutorials: arrayUnion({
          studentId,
          email,
          name,
          tutorialType,
          course,
          date,
          time,
          message
        })
      });

      // const studentRef = doc(db, "Students", studentId);
      // await updateDoc(studentRef, {
      //   tutorials: arrayUnion({
      //     tutorId: tutor.id,
      //     tutorName: tutor.name,
      //     tutorialType,
      //     course,
      //     date,
      //     time,
      //     message
      //   })
      // });

      close();
      alert("Booking successful!");

    } catch (error) {
      console.error("Error booking tutorial: ", error);
      alert("Failed to book tutorial. Please try again.");
    }
  };

  return (
    <section className="h-fit">
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
          <h1>{tutor.id}</h1>
          <div className="">
            <label htmlFor="studentId" className="font-semibold">
              Student id
            </label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              placeholder="Enter your student id"
              className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
              value={bookingInfo.studentId}
              onChange={handleChange}
            />
          </div>

          <div className="">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
              value={bookingInfo.name}
              onChange={handleChange}
            />
          </div>

          <div className="my-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your student email"
              className="w-full px-3 py-1 border text-black/80 border-black/35 rounded-md outline-blue/40"
              value={bookingInfo.email}
              onChange={handleChange}
            />
          </div>

          <MultiSelect
            label="Course"
            placeholder="Select a course you want to learn"
            data={tutor.courses}
            value={bookingInfo.course}
            onChange={(value) => setBookingInfo({ ...bookingInfo, course: value })}
          />

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
            <div className="flex gap-3">
              <label htmlFor="online">
                <input
                  type="radio"
                  name="tutorialType"
                  id="online"
                  value="Online"
                  checked={bookingInfo.tutorialType === "Online"}
                  onChange={handleChange}
                />{" "}
                Online
              </label>
              <label htmlFor="in-person">
                <input
                  type="radio"
                  name="tutorialType"
                  id="in-person"
                  value="In-person"
                  checked={bookingInfo.tutorialType === "In-person"}
                  onChange={handleChange}
                />{" "}
                In-person
              </label>
            </div>
          </div>

          <div className="my-4">
            <h3 className="mb-2 font-semibold">Tell your tutor what you like to learn.</h3>
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

      <button onClick={open} style={{ color: "#042085", fontWeight: "bold" }}>
        Book me
      </button>
    </section>
  );
};

export default Popup;
