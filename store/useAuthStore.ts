import { create } from "zustand"

export interface IUser {
    _id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username: string;
    role: string;
}

export interface AuthStore {
  user: IUser | null ;
  setUser: (user: IUser | null) => void ;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

