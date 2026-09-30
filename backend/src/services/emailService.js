import { resend } from '../config/email.js';
import { statementEmail } from '../utils/emailTemplates.js';

export async function sendStatementEmail(statement) {
  if (!resend) { console.warn('Email disabled: EMAIL_API_KEY is not configured.'); return; }
  const email = statementEmail(statement);
  const { data, error } = await resend.emails.send({ from: process.env.EMAIL_FROM, to: process.env.ADMIN_EMAIL, subject: email.subject, text: email.text });
  if (error) throw new Error(`Resend rejected email: ${error.message}`);
  return data;
}
