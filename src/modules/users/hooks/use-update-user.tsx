import useAuth from '@/modules/auth/hooks/use-auth'
import { useMutation } from '@tanstack/react-query'
import { UserFormDto } from '../dto/user-form.dto'
import { putUserHttp } from '../services/put-user'

export const useUpdateUser = (onSuccess: () => void, onError: () => void) => {
  const { token } = useAuth()
  const coords = useMutation({
    mutationFn: ({ payload, id }: { payload: UserFormDto; id: number }) => putUserHttp(payload, token as string, id),
    onSuccess,
    onError,
  })

  return coords
}
