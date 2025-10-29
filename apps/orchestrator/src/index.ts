import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Apply middleware
app.use(helmet());
app.use(cors());
app.use(express.json()); // For parsing application/json

// Basic health check route
app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Orchestrator server is running!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`[server] Orchestrator running on port ${PORT}`);
});
