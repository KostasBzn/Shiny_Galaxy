import { useContext, useState } from "react";
import { GalaxyContext } from "../context/galaxyContext.jsx";
import Confirm from "../components/Confirm.jsx";

const Home = () => {
  const { sendConfirmationEmail } = useContext(GalaxyContext);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(true);

  const handleMouseHover = () => {
    const newPosition = {
      left: Math.floor(Math.random() * 401) - 200,
      top: Math.floor(Math.random() * 200) + 1,
    };
    setButtonPosition(newPosition);
  };

  const handleYesClick = async () => {
    setIsLoading(true);
    try {
      await sendConfirmationEmail("kostasbouzianis@gmail.com");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
      setConfirmed(true);
      setTimeout(() => {
        setConfirmed(false);
      }, 10000);
    }
  };

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
                Yes!! <i className="fa-regular fa-face-smile-wink"></i>...
              </button>
            ) : (
              <button className="home-yes-button" onClick={handleYesClick}>
                Yes!! <i className="fa-regular fa-face-smile-wink"></i>
              </button>
            )}
          </div>
          <div className="home-no-button-container">
            <button
              className="home-no-button"
              onMouseMove={handleMouseHover}
              style={{
                position: "relative",
                left: buttonPosition.left,
                top: buttonPosition.top,
              }}
            >
              No <i className="fa-solid fa-heart-crack"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="home-confirmed-container">
        {confirmed && <Confirm setConfirmed={setConfirmed} />}
      </div>
    </>
  );
};

export default Home;
