const express = require("express");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Twilio Config
const accountSid = "ACeb76083b1300cb870fb306877985a973";
const authToken = "3a7e657840fa731c9f6e9f53bd9321b5";
const twilioClient = twilio(accountSid, authToken);

// Nodemailer Config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "soldiervishnu99@gmail.com",
    pass: "xryu lyba hwef fqdq"
  }
});

// Function to calculate grade & remarks
function calculateGrade(marks) {
  let grade, remarks;
  if (marks >= 90) { grade = "A+"; remarks = "Excellent! 🎉"; }
  else if (marks >= 75) { grade = "A"; remarks = "Very Good ✅"; }
  else if (marks >= 60) { grade = "B"; remarks = "Good 🙂"; }
  else if (marks >= 40) { grade = "C"; remarks = "Needs Improvement ⚠️"; }
  else { grade = "F"; remarks = "Fail ❌"; }
  return { grade, remarks };
}

// API Endpoint
app.post("/send-result", async (req, res) => {
  const { name, email, phone, marks } = req.body;
  const { grade, remarks } = calculateGrade(marks);

  const message = `Hello ${name}, your marks: ${marks}, Grade: ${grade}, Remarks: ${remarks}`;

  try {
    // Send Email
    await transporter.sendMail({
      from: "soldiervishnu99@gmail.com",
      to: email,
      subject: "Exam Results",
      text: message
    });

    // Send SMS
    await twilioClient.messages.create({
      body: message,
      from: "+15134363892", // your Twilio number
      to: phone
    });

    res.json({ success: true, message: "Email & SMS sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
