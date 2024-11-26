"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Define Permissions Type
type Permission = { id: number; name: string }

type Role = {
  id: number
  name: string
  permissions: number[] // Store permission ids instead of strings
}

const initialRoles: Role[] = [
  { id: 1, name: "Admin", permissions: [1, 2, 3] },
  { id: 2, name: "Editor", permissions: [1, 2] },
  { id: 3, name: "Viewer", permissions: [1] },
]

export function RoleManagement({ availablePermissions = [] }: { availablePermissions?: Permission[] }) {
  const [roles, setRoles] = useState<Role[]>(initialRoles)
  const [newRole, setNewRole] = useState<Partial<Role>>({ permissions: [] })
  const [isAddRoleOpen, setIsAddRoleOpen] = useState(false)

  // Handle adding a new role
  const handleAddRole = () => {
    if (newRole.name && newRole.permissions) {
      setRoles([...roles, { ...newRole, id: roles.length + 1 } as Role])
      setNewRole({ permissions: [] })
      setIsAddRoleOpen(false)
    }
  }

  // Update permissions for a role
  const handleUpdatePermission = (id: number, permissionId: number) => {
    setRoles(roles.map(role => {
      if (role.id === id) {
        const updatedPermissions = role.permissions.includes(permissionId)
          ? role.permissions.filter(p => p !== permissionId)
          : [...role.permissions, permissionId]
        return { ...role, permissions: updatedPermissions }
      }
      return role
    }))
  }

  // Delete a role
  const handleDeleteRole = (id: number) => {
    setRoles(roles.filter(role => role.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Role Management</h2>
        <Dialog open={isAddRoleOpen} onOpenChange={setIsAddRoleOpen}>
          <DialogTrigger asChild>
            <Button>Add Role</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Role</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <input
                  id="name"
                  value={newRole.name || ""}
                  onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Permissions</Label>
                <div className="col-span-3 space-y-2">
                  {availablePermissions?.map((permission) => (
                    <div key={permission.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`permission-${permission.id}`}
                        checked={newRole.permissions?.includes(permission.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setNewRole({
                              ...newRole,
                              permissions: [...(newRole.permissions || []), permission.id],
                            })
                          } else {
                            setNewRole({
                              ...newRole,
                              permissions: newRole.permissions?.filter(id => id !== permission.id),
                            })
                          }
                        }}
                      />
                      <label htmlFor={`permission-${permission.id}`}>{permission.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button onClick={handleAddRole}>Add Role</Button>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role Name</TableHead>
            {availablePermissions?.map(permission => (
              <TableHead key={permission.id}>{permission.name}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              {availablePermissions?.map(permission => (
                <TableCell key={permission.id}>
                  <Checkbox
                    checked={role.permissions.includes(permission.id)}
                    onCheckedChange={() => handleUpdatePermission(role.id, permission.id)}
                  />
                </TableCell>
              ))}
              <TableCell>
                <Button variant="destructive" onClick={() => handleDeleteRole(role.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
