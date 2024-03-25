import { useContext, useEffect, useState } from "react";
import { GalaxyContext } from "../context/galaxyContext.jsx";
import Confirm from "../components/Confirm.jsx";

const Home = () => {
  const { sendConfirmationEmail, responseSuccess } = useContext(GalaxyContext);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleMouseHover = () => {
    const newPosition = {
      left: Math.floor(Math.random() * 361) - 180,
      top: Math.floor(Math.random() * 200) + 1,
    };
    setButtonPosition(newPosition);
  };

  const emailReceiver = "kostasbouzianis@gmail.com";
  const emailSender = "kostasbouzianis@gmail.com";

  const handleYesClick = async () => {
    setIsLoading(true);
    try {
      await sendConfirmationEmail(emailReceiver, emailSender);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (responseSuccess) {
      setConfirmed(true);
      setTimeout(() => {
        setConfirmed(false);
      }, 10000);
    }
  }, [responseSuccess]);

  return (
    <>
      <div className="home-main">
        <div className="home-title-container">
          <h3 className="home-title">Would you like to go for a date?</h3>
        </div>
        <div className="home-buttons-container">
          <div className="home-yes-button-container">
            {isLoading ? (
              <button className="home-yes-button-loading" disabled>
                Yes!!{" "}
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/pulsar-line/48/fbeae7/alien.png"
                  alt="alien"
                  style={{ marginLeft: "8px" }}
                />
                ...
              </button>
            ) : (
              <button className="home-yes-button" onClick={handleYesClick}>
                Yes!!{" "}
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/pulsar-line/48/fbeae7/alien.png"
                  alt="alien"
                  style={{ marginLeft: "8px" }}
                />
              </button>
            )}
          </div>
          <div className="home-no-button-container">
            {" "}
            <button
              className="home-no-button"
              onMouseMove={handleMouseHover}
              style={{
                position: "relative",
                left: buttonPosition.left,
                top: buttonPosition.top,
                transition: "left 0.1s, top 0.1s",
              }}
            >
              {" "}
              <div className="home-no-button-content">
                <p>No</p>
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/material-outlined/48/fbeae7/alien.png"
                  alt="alien"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        {confirmed && (
          <div className="home-confirmed-container">
            <Confirm setConfirmed={setConfirmed} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
