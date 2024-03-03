import { create } from "zustand";

export type RoleType = "ADMIN" | "USER";

export interface UserType {
	username: string;
	role: RoleType;
	first_name: string;
	last_name: string;
	ID: number;
}

interface AuthStore {
	user: UserType | null;
	setUser: (user: UserType | null) => void;
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
	error: string | null;
	setError: (error: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	setUser: (user: UserType | null) => set({ user }),
	isLoading: true, // Prevent initial redirect to login page.
	setIsLoading: (isLoading: boolean) => set({ isLoading }),
	error: null,
	setError: (error: string) => set({ error }),
}));
