"use client";
import { useState } from "react";
import CallMeBackModal from "./CallMeBackModal";
import PhoneCallback from "@mui/icons-material/LocalPhoneRounded";

const CallMeBack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        style={{
          position: "fixed",
          bottom: 104,
          left: 0,
          zIndex: 5,
          margin: "1em",
        }}
      >
        <PhoneCallback
          style={{
            width: "1.9em",
            height: "1.9em",
            backgroundColor: "black",
            color: "white",
            borderRadius: "50%",
            padding: 9,
          }}
        />
      </div>
      {isModalOpen && (
        <CallMeBackModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
};

export default CallMeBack;
