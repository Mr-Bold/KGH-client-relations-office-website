export function validateForm(values, type) {
  const errors = {};
  if (!values.incidentDate) errors.incidentDate = 'Choose the date of the incident.';
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!values.telephone.trim()) errors.telephone = 'Enter your telephone number.';
  if (type === 'STAFF' && !values.unit.trim()) errors.unit = 'Enter your unit.';
  if (!values.narrative.trim()) errors.narrative = 'Describe what happened.';
  if (!values.signature.trim()) errors.signature = 'Enter your signature.';
  if (!values.declarationAccepted) errors.declarationAccepted = 'Please accept the declaration.';
  return errors;
}
