import useAuth from '@/modules/auth/hooks/use-auth'
import { useMutation } from '@tanstack/react-query'
import { deleteClaimHttp } from '../services/delete-claim'

export const useDeleteClaim = (onSuccess: () => void, onError: () => void) => {
  const { token } = useAuth()
  const coords = useMutation({
    mutationFn: (id?: string) => deleteClaimHttp(token as string, id),
    onSuccess,
    onError,
  })

  return coords
}
