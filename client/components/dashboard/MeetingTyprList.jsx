"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { TbUserPlus } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import MeetingCard from "../shared/MeetingCard";
import MeetingModal from "./MeetingModal";
import Cookies from "js-cookie";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDatePicker from "react-datepicker";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState(undefined);
  const [values, setValues] = useState({
    dateTime: new Date(),
    link: "",
    description: "",
  });
  const [callDetails, setCallDetails] = useState();
  const userId = Cookies.get("userId");
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!userId || !client) return;

    try {
      if (!values.dateTime) {
        toast.error("Please select a date and time");
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create meeting");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast.success("Meetings created");
    } catch (err) {
      console.log(err);
      toast.error("Error creating meeting, please try again");
    }
  };

  const meetingLink = `https://p2p-tutoring.vercel.app/meeting/${callDetails?.id}`;
  // const meetingLink = `http://localhost:3000/meeting/${callDetails?.id}`

  return (
    <div>
      <ToastContainer position="top-center" duration={5000} />
      <section className="gap-4 w-full flex flex-wrap lg:flex-nowrap mt-10 text-white">
        <MeetingCard
          title="New meeting"
          content="Start an instant meeting"
          icon={FaPlus}
          color="#f56042"
          handleClick={() => setMeetingState("isInstantMeeting")}
        />
        <MeetingCard
          title="Schedule meeting"
          content="Plan your meeting"
          icon={TbUserPlus}
          color="#28a0eb"
          handleClick={() => setMeetingState("isSchedulegMeeting")}
        />
        <MeetingCard
          title="Join meeting"
          content="Via invitation link "
          icon={MdDateRange}
          color="#630791"
          handleClick={() => setMeetingState("isJoiningMeeting")}
        />

        {!callDetails ? (
          <MeetingModal
            isOpened={meetingState === "isSchedulegMeeting"}
            onClose={() => setMeetingState(undefined)}
            title="create new meeting"
            buttonText="Create a meeting"
            handleClick={createMeeting}
          >
            <div className="">
              <p className="text-black/80 font-bold">Description</p>
              <textarea
                name="description"
                id="description"
                rows={3}
                placeholder="add description"
                className="w-full border-gray-2/70 outline-none my-2 border p-3 rounded-md"
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
                required
              ></textarea>
            </div>

            <div className="flex flex-col w-full">
              <p>Select Date and time</p>
              <ReactDatePicker
                selected={values.dateTime}
                onChange={(date) => setValues({ ...values, dateTime: date })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full border-gray-2/70 outline-none my-2 border p-3 rounded-md"
              />
            </div>
          </MeetingModal>
        ) : (
          <MeetingModal
            isOpened={meetingState === "isSchedulegMeeting"}
            onClose={() => setMeetingState(undefined)}
            title="start an instant meeting"
            buttonText="copy meeting link"
            handleClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast.success("Meeting link copied to clipboard");
            }}
          />
        )}

        <MeetingModal
          isOpened={meetingState === "isInstantMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="start an instant meeting"
          buttonText="Start meeting"
          handleClick={createMeeting}
        />

        <MeetingModal
          isOpened={meetingState === "isJoiningMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Type the link here..."
          buttonText="Join meeting"
          handleClick={() => router.push(values.link)}
        >
          <input
            type="text"
            className="outline-none border border-gray-2 rounded-md w-full px-2 py-1 my-4"
            placeholder="meeting link..."
            onChange={(e) => setValues({ ...values, link: e.target.value })}
          />
        </MeetingModal>
      </section>
    </div>
  );
};

export default MeetingTypeList;
