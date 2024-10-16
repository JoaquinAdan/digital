import useAuth from '@/modules/auth/hooks/use-auth'
import { useQuery } from '@tanstack/react-query'
import { UserDetail } from '../models/user-detail'
import { getUserByIdHttp } from '../services/get-user-by-id'

export const GET_USER = 'GET_USER'

export const useUserById = (id: number, open: boolean) => {
  const { token } = useAuth()
  const user = useQuery<UserDetail>({
    queryKey: [GET_USER, id],
    queryFn: () => getUserByIdHttp(token as string, id),
    enabled: open,
  })

  return user
}
