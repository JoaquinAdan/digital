import useAuth from '@/modules/auth/hooks/use-auth'
import { FilterDto } from '@/modules/shared/models/filter'
import { useQuery } from '@tanstack/react-query'
import { UsersList } from '../dto/users-list-response.dto'
import { getUsersHttp } from '../services/get-users'

export const GET_USERS = 'GET_USERS'

export const useUsers = (filters: FilterDto) => {
  const { token } = useAuth()
  const users = useQuery<UsersList>({
    queryKey: [GET_USERS, filters],
    queryFn: () => getUsersHttp(token as string, filters),
  })

  return users
}
