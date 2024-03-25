import {
  emailInvitationReceiver,
  emailInvitationSender,
} from "../verification/galaxyEmails.js";

export const sendEmail = async (req, res) => {
  const { emailReceiver, emailSender } = req.body;

  try {
    await emailInvitationReceiver(emailReceiver);
    await emailInvitationSender(emailSender);
    res.send({
      success: true,
    });
  } catch (error) {
    console.error("Error sending email notification", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};
