const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { tutorEmail, studentName, course } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pptutoring456@gmail.com",
      pass: "p2p@2024",
    },
  });

  const mailOptions = {
    from: "pptutoring456@gmail.com",
    to: tutorEmail,
    subject: "New Tutorial Booking",
    text: `You have a new tutorial booking from ${studentName} for the course ${course}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Failed to send email");
  }
});

module.exports = router;
