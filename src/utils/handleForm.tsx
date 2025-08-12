"use server";

import { contactSchema } from "@/utils/validationContact";
import { SendEmail } from "@/utils/brevo";
import { Message } from "@/utils/message";

interface FormResult {
  success: boolean;
  errors?: Record<string, any>;
}

export async function HandleForm(formData: FormData): Promise<FormResult> {
  const rawData = {
    nameUser: formData.get("nameUser") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    const formattedErrors = result.error.format();
    return {
      success: false,
      errors: formattedErrors,
    };
  }

  const { nameUser, email} = result.data;

  await SendEmail({
    to: [{ name: nameUser, email: email }],
    htmlContent: Message({ nameUser, }),
  });

  return { success: true };
}
