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
    from: '"Kostas <kosb999663@gmail.com>',
    to: email,
    subject: "Date confirmation!!!",
    html: `
       <p>Hello</p>
      `,
  });

  console.log("Message sent: %s", info.messageId);
};

// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//       <https://github.com/forwardemail/preview-email>
// http://localhost:5173/emailconfirm/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyOGE5NjZiZjVjNTI0Y2IwMmRiYWIiLCJpYXQiOjE3MDcyNDgyNzgsImV4cCI6MTcwNzMzNDY3OH0.b1XLnhQrOxfCKzUtBGneyBDGE_k2cpOPQi1ZomsaHcE
