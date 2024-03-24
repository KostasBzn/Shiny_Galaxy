import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const GalaxyContext = createContext();

const GalaxyContextProvider = ({ children }) => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const sendConfirmationEmail = async (email) => {
    try {
      const response = await axios.post(baseURL + `/send-email`, { email });

      if (response.data.success) {
        console.log("Email send successfully");
      }
    } catch (error) {
      console.log("Error sending the conformation e-mail");
    }
  };

  return (
    <GalaxyContext.Provider value={{ sendConfirmationEmail }}>
      {children}
    </GalaxyContext.Provider>
  );
};

export default GalaxyContextProvider;
