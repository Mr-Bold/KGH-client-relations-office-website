import { createStatement } from '../services/statementService.js';
import { sendStatementEmail } from '../services/emailService.js';

export async function submitStatement(type, req, res, next) {
  try {
    const statement = await createStatement(type, req.body);
    try { await sendStatementEmail(statement); } catch (error) { console.error('Statement saved but email failed:', error.message); }
    res.status(201).json({ success: true, message: 'Statement submitted successfully', referenceNumber: statement.referenceNumber });
  } catch (error) { next(error); }
}
