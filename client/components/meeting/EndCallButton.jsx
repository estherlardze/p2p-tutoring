import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";

const EndCallButton = () => {
  const call = useCall();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const router = useRouter();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call?.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <div className="text-white">
      <button
        onClick={async () => {
          await call?.endCall();
          router.push("/dashboard");
        }}
        className="bg-[#e04a4d] text-white text-[12px] py-1 px-2 rounded-md"
      >
        End call for everyone
      </button>
    </div>
  );
};

export default EndCallButton;
