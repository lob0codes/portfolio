"use server";

import { redirect } from "next/navigation";
import { sendEmail } from "./contact";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMessage(formData: FormData) {
  const message = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (
    isInvalidText(message.name) ||
    isInvalidText(message.email) ||
    isInvalidText(message.message) ||
    !message.email.includes("@")
  ) {
    throw new Error("Invalid input in contact form, try again.");
  }

  await sendEmail(message);
  redirect("/");
}
