'use client';

import useModalVideoStore from '@/store/modalVideoStore';
import { Modal } from 'react-bootstrap';

function ModalVideo() {
  const { isOpen, onClose } = useModalVideoStore();

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="lg"
      centered
    >
      <Modal.Body className=" p-0">
        <div className=" modal-content border-0">
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sEhS83z3XRM?rel=0&controls=1&loop=1&autoplay=0&mute=1si=uW_eBpfeQdgJypfo"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalVideo;
