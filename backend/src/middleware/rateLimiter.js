const requests = new Map();
export function rateLimiter(limit = 10, windowMs = 15 * 60 * 1000) {
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const entry = requests.get(key) || { count: 0, started: now };
    if (now - entry.started > windowMs) { entry.count = 0; entry.started = now; }
    entry.count += 1; requests.set(key, entry);
    if (entry.count > limit) return res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' });
    next();
  };
}
