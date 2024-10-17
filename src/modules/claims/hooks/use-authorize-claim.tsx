import useAuth from '@/modules/auth/hooks/use-auth'
import { useMutation } from '@tanstack/react-query'
import { AuthorizeForm } from '../models/authorize-form'
import { postAuthorizeClaimHttp } from '../services/post-authorize-claim'

export const useAuthorizeClaim = (onSuccess: () => void, onError: () => void) => {
  const { token } = useAuth()
  const coords = useMutation({
    mutationFn: (payload: AuthorizeForm) => postAuthorizeClaimHttp(payload, token as string),
    onSuccess,
    onError,
  })

  return coords
}
