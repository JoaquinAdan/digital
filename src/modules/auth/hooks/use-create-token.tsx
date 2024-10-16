import { useMutation } from '@tanstack/react-query'
import { createTokenHttp } from '../services/create-token'
import { LoginCredentials } from '../models/login-credentials'
import { User } from '../models/user'

export const useCreateToken = (onSuccess: (data: { token: string; usuario: User }) => void, onError: () => void) => {
  const coords = useMutation<{ token: string; usuario: User }, unknown, LoginCredentials>({
    mutationFn: (payload: LoginCredentials) => createTokenHttp(payload),
    onSuccess,
    onError,
  })

  return coords
}
