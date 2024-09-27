import { useState } from 'react'
import { User } from '../models/user'
import { useAuthStore } from '../stores/auth-store'
import { userMock } from '@/mocks/user'
import { useNavigate } from 'react-router'
import PATHS from '@/configs/constants/paths'

const useAuth = () => {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)
  const { user, setUser, token } = useAuthStore()
  const navigate = useNavigate()

  const login = async (): Promise<User | null> => {
    localStorage.setItem('user', JSON.stringify(userMock))
    return new Promise<User | null>(() => {
      setIsLoadingLogin(true)
      setTimeout(() => {
        setUser(userMock)
        setIsLoadingLogin(false)
        navigate(PATHS.PUBLICS.HOME)
      }, 1000)
    })
  }

  // const errorLoading = 'error al iniciar sesión'
  const errorLoading = undefined

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate(PATHS.PUBLICS.HOME)
  }

  return { errorLoading, login, user, logout, isLoadingLogin, token }
}

export default useAuth
