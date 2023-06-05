import React, { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#___gatsby");

const Lightbox = ({ isOpen, onRequestClose, src, onPrev, onNext }) => {
  // ... the rest of your code

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50"
      overlayClassName="fixed inset-0 bg-white"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="absolute inset-0 " onClick={onRequestClose}></div>
      <button
        className="absolute top-24 lg:top-24 right-6 lg:right-24 rounded-full z-50 text-2xl"
        onClick={onRequestClose}
      >
        X
      </button>
      <button
        className="block absolute top-1/2 transform -translate-y-1/2 left-6 lg:left-24 text-3xl font-extralight "
        onClick={onPrev}
      >
        &lt;
      </button>
      <button
        className="block absolute top-1/2 transform -translate-y-1/2 right-6 lg:right-24 text-3xl font-extralight"
        onClick={onNext}
      >
        &gt;
      </button>
      <img
        src={src}
        alt="lightbox"
        className="max-w-full max-h-full p-0 lg:p-24 cursor-pointer"
        onClick={onRequestClose}
      />
    </Modal>
  );
};

export default Lightbox;
