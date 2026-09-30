import { useState } from 'react';
import { validateForm } from '../utils/validation';

export function useForm(initialValues, type, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const update = (event) => { const { name, value, type: inputType, checked } = event.target; setValues((current) => ({ ...current, [name]: inputType === 'checkbox' ? checked : value })); setErrors((current) => ({ ...current, [name]: '' })); };
  const submit = async (event) => { event.preventDefault(); const nextErrors = validateForm(values, type); setErrors(nextErrors); if (Object.keys(nextErrors).length) return false; setSubmitting(true); try { await onSubmit(values); return true; } finally { setSubmitting(false); } };
  return { values, errors, submitting, update, submit, setValues };
}
