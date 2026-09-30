import { Router } from 'express';
import { submitStatement } from '../controllers/statementController.js';
import { validateStatement } from '../middleware/validateStatement.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = Router();
router.post('/client', rateLimiter(), validateStatement('CLIENT'), (req, res, next) => submitStatement('CLIENT', req, res, next));
router.post('/staff', rateLimiter(), validateStatement('STAFF'), (req, res, next) => submitStatement('STAFF', req, res, next));
export default router;
