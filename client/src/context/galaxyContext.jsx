import { createContext, useState } from "react";
import axios from "axios";

export const GalaxyContext = createContext();

const GalaxyContextProvider = ({ children }) => {
  const [responseSuccess, setRsponseSuccess] = useState();

  const baseURL = import.meta.env.VITE_BASE_URL;

  const sendConfirmationEmail = async (emailReceiver, emailSender) => {
    try {
      const response = await axios.post(baseURL + `/send-email`, {
        emailReceiver,
        emailSender,
      });

      if (response.data.success) {
        setRsponseSuccess(response.data.success);
        console.log("Email send successfully");
      }
    } catch (error) {
      console.log("Error sending the conformation e-mail");
    }
  };

  return (
    <GalaxyContext.Provider value={{ sendConfirmationEmail, responseSuccess }}>
      {children}
    </GalaxyContext.Provider>
  );
};

export default GalaxyContextProvider;
