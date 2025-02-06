"use client";
import { useState } from "react";
import CallMeBackModal from "./CallMeBackModal";
import { WhatsApp } from "@mui/icons-material";

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
          bottom: 100,
          left: 0,
          zIndex: 5,
          margin: "1em",
        }}
      >
        <WhatsApp style={{ width: "2.25em", height: "2.25em" }} />
      </div>
      {isModalOpen && (
        <CallMeBackModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
};

export default CallMeBack;
