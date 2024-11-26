"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Permission = {
  id: number
  name: string
}

const initialPermissions: Permission[] = [
  { id: 1, name: "Read" },
  { id: 2, name: "Write" },
  { id: 3, name: "Delete" },
]

export function PermissionManagement() {
  const [permissions, setPermissions] = useState<Permission[]>(initialPermissions)
  const [newPermission, setNewPermission] = useState("")
  const [isAddPermissionOpen, setIsAddPermissionOpen] = useState(false)

  const handleAddPermission = () => {
    if (newPermission) {
      setPermissions([...permissions, { id: permissions.length + 1, name: newPermission }])
      setNewPermission("")
      setIsAddPermissionOpen(false)
    }
  }

  const handleDeletePermission = (id: number) => {
    setPermissions(permissions.filter(permission => permission.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Permission Management</h2>
        <Dialog open={isAddPermissionOpen} onOpenChange={setIsAddPermissionOpen}>
          <DialogTrigger asChild>
            <Button>Add Permission</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Permission</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                value={newPermission}
                onChange={(e) => setNewPermission(e.target.value)}
                placeholder="Permission Name"
              />
            </div>
            <Button onClick={handleAddPermission}>Add Permission</Button>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Permission Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {permissions.map((permission) => (
            <TableRow key={permission.id}>
              <TableCell>{permission.name}</TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => handleDeletePermission(permission.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
