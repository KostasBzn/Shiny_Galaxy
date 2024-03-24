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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4caf50"
              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
            ></path>
            <path
              fill="#ccff90"
              d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
            ></path>
          </svg>
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
