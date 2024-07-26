const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure the email transporter using your email service credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

exports.sendBookingEmail = functions.firestore
  .document("Tutors/{tutorId}/Bookings/{bookingId}")
  .onCreate(async (snap, context) => {
    const bookingData = snap.data();
    const tutorId = context.params.tutorId;

    // Fetch tutor email
    const tutorDoc = await admin.firestore().collection("Tutors").doc(tutorId).get();
    const tutorEmail = tutorDoc.data().email;

    const mailOptions = {
      from: "your-email@gmail.com",
      to: tutorEmail,
      subject: "New Booking Alert",
      text: `You have a new booking from ${bookingData.name} for ${bookingData.course}.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
