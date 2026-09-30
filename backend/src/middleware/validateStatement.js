const phonePattern = /^[+0-9][0-9 ()-]{6,24}$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export function validateStatement(type) {
  return (req, res, next) => {
    const { incidentDate, name, telephone, narrative, declarationAccepted, signature, unit } = req.body || {};
    const errors = [];
    if (!datePattern.test(incidentDate || '') || Number.isNaN(Date.parse(incidentDate))) errors.push('Enter a valid incident date.');
    if (!name?.trim() || name.length > 150) errors.push('Name is required and must be under 150 characters.');
    if (!phonePattern.test(telephone || '')) errors.push('Enter a valid telephone number.');
    if (!narrative?.trim() || narrative.length > 5000) errors.push('Narrative is required and must be under 5,000 characters.');
    if (!signature?.trim() || signature.length > 150) errors.push('Signature is required and must be under 150 characters.');
    if (type === 'STAFF' && (!unit?.trim() || unit.length > 150)) errors.push('Unit is required and must be under 150 characters.');
    if (declarationAccepted !== true) errors.push('You must accept the declaration.');
    if (errors.length) return res.status(400).json({ success: false, message: errors[0], errors });
    next();
  };
}
