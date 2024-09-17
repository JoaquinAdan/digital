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
    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Impyb2RyaWd1ZXpAY2FtcGFuYS5nb3YuYXIiLCJVc2VybmFtZSI6Impyb2RyaWd1ZXoiLCJJZCI6IjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiVk9MUVVFVEVTIiwiRElTQ0FQQUNJREFEIiwiQ0VNQVZfQURNSU4iXSwiZXhwIjoxNzI2MjQwOTcyLCJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QifQ.m_JsKiSaLORNiSXLzzOEL77gP78pTRjkJ2pgJUC2R84',
}))
