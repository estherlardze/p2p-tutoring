import React from "react";
import { Modal } from "@mantine/core";
import Image from "next/image";

const MeetingModal = ({
  isOpened,
  onClose,
  title,
  buttonText,
  handleClick,
  buttonIcon,
  image,
  children 
}) => {
  return (
    <Modal opened={isOpened} onClose={onClose} title={title} centered>
      <div className="flex flex-col">
        {image && <Image src={image} alt="image" width={100} height={100} />}
        <div className="modal-content">
          {children} 
        </div>
        <button
          onClick={handleClick}
          className="w-full bg-blue text-white font-semibold py-1 text-center"
        >
          {buttonIcon && <Image src={buttonIcon} alt="icon" width={24} height={24} />} &nbsp;
          {buttonText || "Schedule Meeting..."}
        </button>
      </div>
    </Modal>
  );
};

export default MeetingModal;
