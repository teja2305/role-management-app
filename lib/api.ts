import { User } from '@/types/user'
import { Role } from '@/types/role'

// Simulated database
let users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
]

let roles: Role[] = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
]

// User API
export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 500)
  })
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  return new Promise((resolve) => {
    const newUser = { ...user, id: users.length + 1 }
    users.push(newUser)
    setTimeout(() => resolve(newUser), 500)
  })
}

export const updateUser = async (id: number, updates: Partial<User>): Promise<User> => {
  return new Promise((resolve, reject) => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
      users[index
] = { ...users[index], ...updates }
      setTimeout(() => resolve(users[index]), 500)
    } else {
      setTimeout(() => reject(new Error('User not found')), 500)
    }
  })
}

export const deleteUser = async (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
      users.splice(index, 1)
      setTimeout(() => resolve(), 500)
    } else {
      setTimeout(() => reject(new Error('User not found')), 500)
    }
  })
}

// Role API
export const getRoles = async (): Promise<Role[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(roles), 500)
  })
}

export const createRole = async (role: Omit<Role, 'id'>): Promise<Role> => {
  return new Promise((resolve) => {
    const newRole = { ...role, id: roles.length + 1 }
    roles.push(newRole)
    setTimeout(() => resolve(newRole), 500)
  })
}

export const updateRole = async (id: number, updates: Partial<Role>): Promise<Role> => {
  return new Promise((resolve, reject) => {
    const index = roles.findIndex(role => role.id === id)
    if (index !== -1) {
      roles[index] = { ...roles[index], ...updates }
      setTimeout(() => resolve(roles[index]), 500)
    } else {
      setTimeout(() => reject(new Error('Role not found')), 500)
    }
  })
}

export const deleteRole = async (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const index = roles.findIndex(role => role.id === id)
    if (index !== -1) {
      roles.splice(index, 1)
      setTimeout(() => resolve(), 500)
    } else {
      setTimeout(() => reject(new Error('Role not found')), 500)
    }
  })
}

