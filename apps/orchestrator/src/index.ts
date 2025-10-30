import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { ApiResponse } from '@healthsync/shared';

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
  const response: ApiResponse<{ message: string }> = {
    success: true,
    data: { message: 'Orchestrator server is running!' }
  };
  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`[server] Orchestrator running on port ${PORT}`);
});
