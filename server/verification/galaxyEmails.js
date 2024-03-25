import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const clientURL = process.env.CLIENT_URL;

export const emailInvitationReceiver = async (emailReceiver, randomCode) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: '"Shiny Galaxy <kosb999663@gmail.com>',
        to: emailReceiver,
        subject: "Date confirmation!!!",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <h1 style="color: #333;">This is your date confirmation with Kostas</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">Dear Tyhe,</p>
            <p style="font-size: 16px;">Please show this email the day you meet with Kostas to verify that you are the true alien he knows, and not one of the bad replitians that attacked your galaxy and now trying to destroy the earth!!</p>
            <p style="font-size: 16px;">To proccess the date, the secret code below must match with Kostas the day you meet</p>
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; color: #000;">
              ${randomCode}
            </div>
            <p style="font-size: 16px;">To go back to your site please click the button below:</p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="${clientURL}/" style="background-color: #b2456e; color: #fbeae7; padding: 10px 20px; text-decoration: none; border-radius: 25px; font-size: 16px;">Go Back</a>
            </div>
            <p style="font-size: 16px;">Kostas</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <p style="font-size: 14px; color: #666;">This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
      },
      (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          reject(error);
        } else {
          console.log("Message sent: %s", info.messageId);
          resolve(info);
        }
      }
    );
  });
};

export const emailInvitationSender = async (emailSender, randomCode) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: '"Shiny Galaxy <kosb999663@gmail.com>',
        to: emailSender,
        subject: "Date confirmation!!!",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <h1 style="color: #333;">This is your date confirmation with Tyhe</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">Dear Kostas,</p>
            <p style="font-size: 16px;">if you read this email it means that we have good news for you, and that means that Tyhe accepted your invitation!!</p>
            <p style="font-size: 16px;">Please show this email the day you meet with Tyhe to verify that she is the true alien you know, and not the enemy reptilians that tried to destroy her galaxy!!</p>
         </div>
         <p style="font-size: 16px;">To proccess the date, the secret code below must match with Tyhe the day you meet</p>
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; color: #000;">
              ${randomCode}
            </div>
            <br/>
            <br/>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <p style="font-size: 14px; color: #666;">This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
      },
      (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          reject(error);
        } else {
          console.log("Message sent: %s", info.messageId);
          resolve(info);
        }
      }
    );
  });
};
