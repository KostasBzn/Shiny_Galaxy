import { emailInvitation } from "../verification/galaxyEmails.js";

export const sendEmail = async (req, res) => {
  const { email } = req.body;

  try {
    emailInvitation(email);
    res.send({
      success: true,
      message: `I get the fucking email: ${email}`,
    });
  } catch (error) {
    console.error("Error sending email notification", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};
