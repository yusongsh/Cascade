import React, { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#___gatsby");

const Lightbox = ({ isOpen, onRequestClose, src }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 bg-black flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-white"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="absolute inset-0 " onClick={onRequestClose}></div>
      <img
        src={src}
        alt="lightbox"
        className="max-w-full max-h-full cursor-pointer"
        onClick={onRequestClose}
      />
    </Modal>
  );
};

export default Lightbox;
