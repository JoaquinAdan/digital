import { useMutation } from '@tanstack/react-query'
import { createToken } from '../services/create-token'
import { LoginCredentialsDto } from '../dto/login-credentials.dto'
import { User } from '../models/user'

export const useCreateToken = (onSuccess: (data: { token: string; usuario: User }) => void, onError: () => void) => {
  const coords = useMutation<{ token: string; usuario: User }, unknown, LoginCredentialsDto>({
    mutationFn: (payload: LoginCredentialsDto) => createToken(payload),
    onSuccess,
    onError,
  })

  return coords
}
