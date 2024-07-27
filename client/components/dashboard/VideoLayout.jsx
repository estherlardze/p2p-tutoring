"use client";

import React from "react";
import { meetingdata } from "@/constants/data";
import Loader from "../Loader";

import {
  CallControls,
  CallingState,
  ParticipantView,
  SpeakerLayout,
  StreamTheme,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";

const VideoLayout = () => {
  const call = useCall();

  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <Loader />;
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition="bottom" />
      <CallControls />
    </StreamTheme>
  );
};

export default VideoLayout;

export const ParticipantsList = (props) => {
  const { participants } = props;

  return (
    <div className="flex flex-row w-screen gap-2">
      {participants.map((participant) => (
        <div className="w-full" key={participant.sessionId}>
          <ParticipantView
            muteAudio
            participant={participant} 
            key={participant.sessionId}
          />
        </div>
      ))}
    </div>
  );
};

export const ParticipantFloatLocal = (props) => {
  const { participants } = props;

  return (
    <div className="flex flex-row w-screen gap-2">
      {Array.isArray(participants) &&
        participants.map((participant) => (
          <div
            key={participant.sessionId}
            className="absolute top-[15px] left-[15px] w-[240px] h-[135px] shadow-md rounded-md"
          >
            {participant && <ParticipantView participant={participant} />}
          </div>
        ))}
    </div>
  );
};
