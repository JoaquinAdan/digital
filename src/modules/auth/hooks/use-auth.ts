import PATHS from '@/configs/constants/paths'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { LoginCredentialsDto } from '../models/login-credentials'
import { User } from '../models/user'
import { useAuthStore } from '../stores/auth-store'
import { useCreateToken } from './use-create-token'

const useAuth = () => {
  const [errorLoading, setErrorLoading] = useState<string | undefined>(undefined)
  const { user, setUser, token, setToken } = useAuthStore()
  const navigate = useNavigate()

  const onSuccess = (data: { token: string; usuario: User }) => {
    console.log(data)
    setUser(data.usuario)
    setToken(data.token)
    navigate(PATHS.PUBLIC.HOME)
  }

  const onError = () => {
    setErrorLoading('Error al iniciar sesión')
  }

  const mutation = useCreateToken(onSuccess, onError)

  const login = (credentials: LoginCredentialsDto) => {
    mutation.mutate(credentials)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    navigate(PATHS.PUBLIC.HOME)
  }

  return { errorLoading, login, user, logout, isLoadingLogin: mutation.isPending, token }
}

export default useAuth
