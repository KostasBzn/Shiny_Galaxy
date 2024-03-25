import randomstring from "randomstring";
import {
  emailInvitationReceiver,
  emailInvitationSender,
} from "../verification/galaxyEmails.js";

export const sendEmail = async (req, res) => {
  const { emailReceiver, emailSender } = req.body;

  const randomCode = randomstring.generate({
    length: 4,
    charset: "alphanumeric",
    capitalization: "uppercase",
  });

  try {
    await emailInvitationReceiver(emailReceiver, randomCode);
    await emailInvitationSender(emailSender, randomCode);
    res.send({
      success: true,
    });
  } catch (error) {
    console.error("Error sending email notification", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};
