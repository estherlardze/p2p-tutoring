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

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState(undefined);
  const [values, setValues] = useState({
    dateTime: new Date(),
    link: "",
    description: "",
  });
  const [callDetails, setCallDetails] = useState()
  const userId = Cookies.get("studentId");
  const client = useStreamVideoClient()

  const createMeeting = async() => {
    if(!userId || !client) return;

    try{
      const id = crypto.randomUUID()
      const call = client.call("default", id)

      if(!call) throw new Error("Failed to create meeting")

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting"

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description
          }
        }
      })

      setCallDetails(call)

      if(!values.description) {
        router.push(`/meeting/${call.id}`)
      }
    }
    catch(err){
      console.log(err)
    }
  };

  return (
    <section className="gap-4 w-full grid grid-cols-4 mt-10 text-white">
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
      <MeetingCard
        title="View Recording"
        content="Meeting recordings"
        icon={CiVideoOn}
        color="#d1b204"
        handleClick={() => router.push("/recordings")}
      />

      <MeetingModal
        isOpened={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="start an instant meeting"
        buttonText="Start meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
