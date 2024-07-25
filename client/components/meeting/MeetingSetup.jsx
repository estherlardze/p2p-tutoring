"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";

const MeetingSetup = ({ setIsSetupComplete }) => {
  const [isMicOn, setIsMicOn] = useState(false);
  const call = useCall();
  
  if (!call) {
    throw new Error("useCall must be used within a component");
  }

  useEffect(() => {
    if (isMicOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicOn, call]);

  return (
    <div className="w-full flex flex-col h-[70vh] gap-3 items-center justify-center mx-auto bg-white text-black">
      <h1 className="text-3xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicOn}
            onChange={(e) => setIsMicOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>

      <button
        className="bg-blue px-4 py-1 rounded  text-white mt-5 hover:bg-dark-4 transition-all"
        onClick={() => {
          call?.join();
          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </button>
    </div>
  );
};

export default MeetingSetup;
