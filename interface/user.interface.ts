type Roles = "NURSE" | "ADMIN";

export interface User {
	Username: string;
	Role: Roles;
}
