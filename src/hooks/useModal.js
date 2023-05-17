import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import { Modal } from "../components/Modal";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ModalComponent = ({ image }) =>
    image ? <ImageModal isOpen={isOpen} onClose={closeModal} image={image} /> : <Modal isOpen={isOpen} onClose={closeModal} />;

  return [ModalComponent, openModal, closeModal];
};

export default useModal;
