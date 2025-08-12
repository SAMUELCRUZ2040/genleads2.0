"use server"

import * as brevo from "@getbrevo/brevo";

const apiInstace = new brevo.TransactionalEmailsApi();

apiInstace.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
    
);

export async function SendEmail({ to, htmlContent }) {
  try{
    
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = "New client for wiht a need bussiness";
    smtpEmail.to = to;
    smtpEmail.htmlContent = `<html><body>${htmlContent}</body></html>`;
    smtpEmail.sender = { name: "samuel", email: "samuelcruz2040@gmail.com"  }

    await apiInstace.sendTransacEmail(smtpEmail);
  }catch (error) {
    console.error("Error sending email: error", error);
  }
}