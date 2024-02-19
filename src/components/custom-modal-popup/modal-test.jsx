import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <>
      <div>
        <button onClick={() => handleToggleModalPopup()}>
          Open Modal PopUp
        </button>
        {showModalPopup && (
          <Modal
            onClose={onClose}
            header={<div>Customized Header</div>}
            body={<div>This is Customized Body!</div>}
            footer={<div>Customized Footer</div>}
          />
        )}
      </div>
    </>
  );
};

export default ModalTest;
