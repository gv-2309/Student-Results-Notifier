import { Resend } from "resend";  // for email (easier than Gmail SMTP)
import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, marks } = req.body;

  const messageBody = `Hello ${name}, your marks are ${marks}.`;

  try {
    // ✅ Send Email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Results <onboarding@resend.dev>",
      to: email,
      subject: "Your Marks",
      text: messageBody,
    });

    // ✅ Send SMS via Twilio
    const client = twilio(
      process.env.TWILIO_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      body: messageBody,
      from: process.env.TWILIO_PHONE,
      to: phone,
    });

    res.status(200).json({ success: true, message: "Result sent!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
