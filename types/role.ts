export type Permission = "Read" | "Write" | "Delete"

export type Role = {
  id: number
  name: string
  permissions: Permission[]
}

