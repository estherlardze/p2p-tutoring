import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "../Loader";

const MeetingRoom = () => {
  const [layout, setLayout] = useState("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const searchParams = useSearchParams()
  const isPersonalRoom = !!searchParams.get("personal")
  const {useCallCallingState} =useCallStateHooks()
  const callingState = useCallCallingState()

  if(callingState !== CallingState.JOINED) return <Loader/>

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  return (
    <section className="text-white absolute left-4 top-4 bg-black w-[90vw] flex  flex-col h-[90vh] rounded-md  gap-3 items-center justify-center m-auto">
      <div className="flex justify-start w-full items-center h-[70vh] absolute ">
        <div className="size-full flex w-[80%] mx-auto h-[50vh] items-center justify-center">
          <CallLayout />
        </div>

        <div
          className={`${
            showParticipants ? "block" : "hidden"
          } h-[calc(70vh-84px)] ml-2`}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-5 absolute bottom-2 left-2 right-2 flex-wrap">
        <CallControls />
        <CallStatsButton />
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-2xl bg-black/20 px-4 py-2 ">
            <FiUsers size={20} className="text-white" />
          </div>
        </button>

        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
