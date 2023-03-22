import React, { useState } from 'react';
import "../css/Modal.css"

const Modal = ({ onClose, children }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  };

  export default Modal;
