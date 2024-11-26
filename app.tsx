// src/App.tsx

import React from "react"
import { RoleManagement } from "./components/role-management"  // Adjust this import path if necessary

const permissions = [
  { id: 1, name: "Read" },
  { id: 2, name: "Write" },
  { id: 3, name: "Delete" },
]

export default function App() {
  return (
    <div className="App">
      <RoleManagement availablePermissions={permissions} />
    </div>
  )
}
