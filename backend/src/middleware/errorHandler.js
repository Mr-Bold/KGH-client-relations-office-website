export function errorHandler(error, req, res, next) {
  console.error('Request failed:', error.message);
  res.status(error.status || 500).json({ success: false, message: 'Something went wrong while submitting your statement. Please try again.' });
}
