import { Resend } from "resend";

export async function sendEmail(message: {
  name: string;
  email: string;
  message: string;
}) {
  const resend = new Resend("re_NcGGZCWs_FsaeboWBWPibWvXqpZiLWr4L");

  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "lob0codes@gmail.com",
    subject: "Portfolio Feedback",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
}
