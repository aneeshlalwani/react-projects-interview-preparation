const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <>
      <div id={id || "Modal"} className="modal">
        <div className="modal-content">
          <div className="header">
            <span onClick={() => onClose()} className="close-modal-icon">
              &times;
            </span>
            <h2>{header ? header : "Header"}</h2>
          </div>
          <div className="body">
            {body ? body : <div>This is Modal Popup</div>}
          </div>
          <div className="footer">
            <h2>{footer ? footer : "Footer"}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
