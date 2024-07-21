"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { TbUserPlus } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import MeetingCard from "../shared/MeetingCard";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState(undefined);

  const createMeeting = () => {};

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
