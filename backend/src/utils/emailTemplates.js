export function statementEmail(statement) {
  const label = statement.statementType === 'STAFF' ? 'STAFF' : 'CLIENT';
  return {
    subject: `New ${label[0] + label.slice(1).toLowerCase()} Statement - ${statement.referenceNumber}`,
    text: [
      'KADE GOVERNMENT HOSPITAL', 'CLIENT RELATIONS OFFICE', '', `NEW ${label} STATEMENT`, '',
      `Reference: ${statement.referenceNumber}`, `Date of Incident: ${statement.incidentDate}`, `Name: ${statement.name}`,
      ...(label === 'STAFF' ? [`Unit: ${statement.unit}`] : []), `Telephone: ${statement.telephone}`,
      '', 'Narrative of Events:', statement.narrative, '', 'Declaration: Confirmed', `Submitted: ${statement.submittedAt}`,
      '', 'This statement was submitted through the Kade Government Hospital Client Relations online system.'
    ].join('\n')
  };
}
