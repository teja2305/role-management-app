# **Application Documentation**

## **Overview**

This project implements a role-based access control system with the following features:
- **Permission Management**: Create, view, and delete permissions.
- **Role Management**: Assign and manage permissions for specific roles.
- **User Management**: Associate roles with users.
- **Reusable UI Components**: Custom-designed components like tables, dialogs, buttons, and input fields.

---

## **File: `permission-management.tsx`**

### **Purpose**
Handles the management of permissions, including adding, listing, and deleting them.

### **Key Features**
1. **Permission List**: Displays all available permissions in a table.
2. **Add Permission**:
   - Opens a dialog where users can add new permissions by name.
   - Updates the permissions list dynamically.
3. **Delete Permission**: Removes a selected permission from the list.

### **State Management**
- **`permissions`**: Maintains the list of permissions.
- **`newPermission`**: Tracks the name of a new permission being added.
- **`isAddPermissionOpen`**: Controls the visibility of the "Add Permission" dialog.

---

## **File: `role-management.tsx`**

### **Purpose**
Manages roles and their associated permissions.

### **Key Features**
1. **Role List**: Displays all roles in a table, including their associated permissions.
2. **Add Role**:
   - Opens a dialog where users can add a new role.
   - Users can assign permissions during role creation.
3. **Update Role Permissions**: Allows toggling permissions for each role using checkboxes.
4. **Delete Role**: Removes a role from the list.

### **State Management**
- **`roles`**: Maintains the list of roles, including their permissions.
- **`newRole`**: Tracks the name and selected permissions of a new role being added.
- **`isAddRoleOpen`**: Controls the visibility of the "Add Role" dialog.

### **Props**
- **`availablePermissions`**: Receives the list of permissions to assign to roles.

---

## **File: `user-management.tsx`**

### **Purpose**
Manages users and their assigned roles.

### **Key Features**
1. **User List**: Displays all users in a table, including their assigned roles.
2. **Add User**:
   - Allows adding a new user with an assigned role.
   - Assigns only one role per user.
3. **Update User Role**: Enables editing the assigned role of a user.
4. **Delete User**: Removes a user from the list.

### **State Management**
- **`users`**: Maintains the list of users and their roles.
- **`newUser`**: Tracks details of a new user being added.
- **`isAddUserOpen`**: Controls the visibility of the "Add User" dialog.

### **Props**
- **`availableRoles`**: Receives the list of roles to assign to users.

---

## **File: `layout.tsx`**

### **Purpose**
Defines the structure and layout of the application. Provides a consistent look and feel for all pages.

### **Key Features**
1. **Navigation**: Includes links to different sections, such as permission management, role management, and user management.
2. **Reusable Layout**: Ensures uniformity across pages.

---

## **File: `page.tsx`**

### **Purpose**
Serves as the entry point or landing page for the application.

### **Key Features**
1. **Default Content**: Displays an overview or dashboard of the application.
2. **Navigation Links**: Provides quick access to permission, role, and user management pages.

---

## **Usage and Navigation**

1. **Permission Management**: Manage permissions by navigating to `/permissions`. Add or delete permissions as needed.
2. **Role Management**: Manage roles by navigating to `/roles`. Assign permissions to roles and delete or update roles.
3. **User Management**: Manage users by navigating to `/users`. Assign roles to users and modify their roles if required.

---

## **Setup and Instructions**

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   Open `http://localhost:3000` in your browser.

---

## **Dependencies**

### **UI Components**
The project uses prebuilt components such as:
- **Table**: For listing data.
- **Button**: For actions like adding or deleting.
- **Dialog**: For modal popups.
- **Input**: For user input fields.

### **State Management**
`useState` is used for managing component-level state.
