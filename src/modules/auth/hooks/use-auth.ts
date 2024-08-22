import { useState } from 'react'
import { User } from '../models/user'
import { useAuthStore } from '../stores/auth-store'
import { userMock } from '@/mocks/user'

const useAuth = () => {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)
  const { user, setUser } = useAuthStore()

  const login = async (): Promise<User | null> => {
    localStorage.setItem('user', JSON.stringify(userMock))
    return new Promise<User | null>(() => {
      setIsLoadingLogin(true)
      setTimeout(() => {
        setUser(userMock)
        setIsLoadingLogin(false)
      }, 1000)
    })
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return { login, user, logout, isLoadingLogin }
}

export default useAuth
