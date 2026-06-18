import nodemailer from "nodemailer";

export async function sendMail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    subject: `New Contact Form: ${subject}`,

    html: `
      <h2>New Contact Request</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `,
  });
}