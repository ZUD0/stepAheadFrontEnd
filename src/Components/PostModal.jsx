import React from "react";
import { Button, Modal, FileInput, Label } from "flowbite-react";
import { useState } from "react";
import CreatePost from "./CreatePost";

export default function PostModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Post</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        {/* <Modal.Header>Terms of Service</Modal.Header> */}
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <CreatePost/>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
