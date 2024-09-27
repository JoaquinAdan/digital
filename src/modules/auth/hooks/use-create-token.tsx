import { useMutation } from '@tanstack/react-query'
import { createToken } from '../services/create-token'
import { LoginCredentialsDto } from '../dto/login-credentials.dto'

export const useCreateToken = (onSuccess: (data: { token: string }) => void, onError: () => void) => {
  const coords = useMutation<{ token: string }, unknown, LoginCredentialsDto>({
    mutationFn: (payload: LoginCredentialsDto) => createToken(payload),
    onSuccess,
    onError,
  })

  return coords
}
