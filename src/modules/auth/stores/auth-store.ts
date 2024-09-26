import { create } from 'zustand'
import { User } from '../models/user'

interface AuthStore {
  setUser: (user: User | null) => void
  user: User | null
  token: string | null
}

export const useAuthStore = create<AuthStore>((set) => ({
  setUser: (user: User | null) => set({ user }),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token:
    localStorage.getItem('token') ??
    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Impyb2RyaWd1ZXpAY2FtcGFuYS5nb3YuYXIiLCJVc2VybmFtZSI6Impyb2RyaWd1ZXoiLCJJZCI6IjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiVk9MUVVFVEVTIiwiRElTQ0FQQUNJREFEIiwiQ0VNQVZfQURNSU4iLCJUUkFOU0lUT19BRE1JTiJdLCJleHAiOjE3MjczNjA0MDUsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6ImxvY2FsaG9zdCJ9.wAtY7iiik59xeLW3v1dqUSWRzgjalbF02EpTbZmN3qI',
}))
