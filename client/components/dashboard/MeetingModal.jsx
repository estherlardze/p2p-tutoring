import React from "react";
import { Modal } from "@mantine/core";

const MeetingModal = ({
  isOpened,
  onClose,
  title,
  buttonText,
  handleClick,
  image
}) => {
  return (
    <Modal opened={isOpened} onClose={onClose} title={title} centered>
      <div className="flex flex-col">
        {image && <Image src={image} alt="image" width={100} height={100} />}

        <button
          onClick={handleClick}
          className="w-full bg-blue text-white font-semibold py-1 text-center"
        >
          {buttonText}
        </button>
      </div>
    </Modal>
  );
};

export default MeetingModal;
