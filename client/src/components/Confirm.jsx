// Confirm.jsx

import React from "react";

const Confirm = ({ setConfirmed }) => {
  return (
    <>
      <div className="confirm-container">
        <div className="confirm-header">
          <button
            type="button"
            className="close-button"
            onClick={() => {
              setConfirmed(false);
            }}
          >
            <svg
              className="close-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
        <div className="confirm-content">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/quill/100/40C057/alien.png"
            alt="alien"
          />

          <h3 className="confirm-text">
            Now check your email!!{" "}
            <i className="fa-regular fa-face-smile-wink"></i>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Confirm;
