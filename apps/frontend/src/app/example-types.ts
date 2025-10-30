// Example of using shared types in the frontend
import type { User, FederatedLearningRound, ApiResponse } from '@healthsync/shared';

// This file demonstrates type safety across the monorepo
// The types are imported from the shared package, ensuring
// frontend and backend use the same data contracts

export function exampleUsage() {
  // Example user object with type safety
  const user: User = {
    id: '123',
    email: 'admin@healthsync.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date()
  };

  // Example FL round object
  const round: FederatedLearningRound = {
    id: 'round-001',
    status: 'running',
    startTime: new Date(),
    participatingNodes: 3,
    globalAccuracy: 0.95
  };

  // Example API response
  const response: ApiResponse<User> = {
    success: true,
    data: user
  };

  return { user, round, response };
}
