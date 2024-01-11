import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(message: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["lob0codes@gmail.com"],
      subject: "Portfolio Feedback",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
