import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import statementRoutes from './routes/statementRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '32kb' }));
app.get('/api/health', (req, res) => res.json({ success: true, message: 'Kade Hospital API is running' }));
app.use('/api/statements', statementRoutes);
app.use(errorHandler);
export default app;
