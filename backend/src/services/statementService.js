import { supabase } from '../config/database.js';
import { generateReference } from '../utils/generateReference.js';

export async function createStatement(type, data) {
  const referenceNumber = generateReference();
  const { data: saved, error } = await supabase.from('statements').insert({
    reference_number: referenceNumber,
    statement_type: type,
    incident_date: data.incidentDate,
    name: data.name.trim(),
    telephone: data.telephone.trim(),
    unit: type === 'STAFF' ? data.unit.trim() : null,
    narrative: data.narrative.trim(),
    declaration_accepted: data.declarationAccepted,
    signature: data.signature.trim()
  }).select('id, reference_number, submitted_at').single();
  if (error) throw error;
  return { ...data, statementType: type, referenceNumber: saved.reference_number, submittedAt: saved.submitted_at, id: saved.id };
}
