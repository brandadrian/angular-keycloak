export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
  assignedTo?: string;
  category: string;
}

export const todosData: Todo[] = [
  {
    id: 1,
    title: "Set up Keycloak realm configuration",
    description: "Configure the master realm with proper roles and client settings for the Angular application",
    completed: true,
    priority: "high",
    dueDate: "2025-08-20",
    createdAt: "2025-08-15",
    assignedTo: "admin",
    category: "DevOps"
  },
  {
    id: 2,
    title: "Implement user profile component",
    description: "Create a user profile page where authenticated users can view and edit their information",
    completed: true,
    priority: "medium",
    dueDate: "2025-08-22",
    createdAt: "2025-08-16",
    assignedTo: "frontend-dev",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Add role-based navigation",
    description: "Hide/show navigation items based on user roles and authentication status",
    completed: true,
    priority: "medium",
    createdAt: "2025-08-17",
    assignedTo: "frontend-dev",
    category: "Frontend"
  }
];
