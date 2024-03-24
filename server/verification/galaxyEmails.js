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

export const emailInvitation = async (email) => {
  const info = await transporter.sendMail({
    from: '"Kostas <kostasbouzianis@gmail.com>',
    to: email,
    subject: "Date confirmation!!!",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <h1 style="color: #333;">This is your date confimation with Kostas</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">Dear Tyhe,</p>
            <p style="font-size: 16px;">Please show this email the day you meet with Kostas to verify that you are not an alien that abducted your real body and he've sent a copy of you on earth!!</p>
            <p style="font-size: 16px;">To go back to your site please click the button bellow:</p>
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
  });

  console.log("Message sent: %s", info.messageId);
};

// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//       <https://github.com/forwardemail/preview-email>
// http://localhost:5173/emailconfirm/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyOGE5NjZiZjVjNTI0Y2IwMmRiYWIiLCJpYXQiOjE3MDcyNDgyNzgsImV4cCI6MTcwNzMzNDY3OH0.b1XLnhQrOxfCKzUtBGneyBDGE_k2cpOPQi1ZomsaHcE
