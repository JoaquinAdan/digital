import useAuth from '@/modules/auth/hooks/use-auth'
import { useMutation } from '@tanstack/react-query'
import { ClaimFormDto } from '../dto/claim-form.dto'
import { postClaimHttp } from '../services/post-claim'

export const useCreateClaim = (onSuccess: () => void, onError: () => void) => {
  const { token } = useAuth()
  const coords = useMutation({
    mutationFn: (payload: ClaimFormDto) => postClaimHttp(payload, token as string),
    onSuccess,
    onError,
  })

  return coords
}
