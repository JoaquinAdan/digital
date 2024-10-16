import { useMutation } from '@tanstack/react-query'
import { UserFormDto } from '../dto/user-form.dto'
import { createUserHttp } from '../services/post-user'
import useAuth from '@/modules/auth/hooks/use-auth'

export const useCreateUser = (onSuccess: () => void, onError: () => void) => {
  const { token } = useAuth()
  const coords = useMutation({
    mutationFn: (payload: UserFormDto) => createUserHttp(payload, token as string),
    onSuccess,
    onError,
  })

  return coords
}
