import { useState } from 'react'
import { User } from '../models/user'
import { useAuthStore } from '../stores/auth-store'

const roles = [
  // {
  //   name: 'Admin',
  //   permissions: [{ scope: '*', resource: '*', action: '*' }],
  // },
  {
    name: 'InspectorReclamos',
    permissions: [{ scope: 'reclamos', resource: 'reclamo', action: 'updateSelf' }],
  },
  {
    name: 'CocineroSigic',
    permissions: [{ scope: 'sigic', resource: 'event', action: '*' }],
  },
  // {
  //   name: 'Vecino',
  //   permissions: [
  //     {scope: 'public', resource: '', action: ''}
  //   ]
  // }
]

const useAuth = () => {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)
  const { user, setUser } = useAuthStore()

  const login = async (): Promise<User | null> => {
    return new Promise<User | null>(() => {
      setIsLoadingLogin(true)
      setTimeout(() => {
        setUser({
          id: 1,
          name: 'Joaquin Rodriguez',
          email: 'rodriguezjdev@gmail.com',
          roles,
        })
        setIsLoadingLogin(false)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
  }

  return { login, user, logout, isLoadingLogin }
}

export default useAuth
