// User and Authentication types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'hospital';
  createdAt: Date;
}

export type AuthResponse = {
  user: User;
  token: string;
};

// Federated Learning types
export type FLRoundStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface FederatedLearningRound {
  id: string;
  status: FLRoundStatus;
  startTime: Date;
  endTime?: Date;
  participatingNodes: number;
  globalAccuracy?: number;
  globalLoss?: number;
}

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
