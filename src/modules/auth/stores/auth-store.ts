import { create } from 'zustand'
import { User } from '../models/user'

interface AuthStore {
  setUser: (user: User | null) => void
  user: User | null
}

export const useAuthStore = create<AuthStore>((set) => ({
  setUser: (user: User | null) => set({ user }),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
}))
