import functions from "firebase-functions";
import admin from "firebase-admin";
import nodemailer from "nodemailer";

admin.initializeApp();

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
      from: "odzaoe@gmail.com",
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
