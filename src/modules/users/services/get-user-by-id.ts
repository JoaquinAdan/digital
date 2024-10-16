import { handler } from '@/http/handler'
import { apiBase } from '@/configs/constants/api-base'
import { UserDetail } from '../models/user-detail'

export const getUserByIdHttp = (token: string, id: number): Promise<UserDetail> => {
  return handler<UserDetail>(
    fetch(`${apiBase}/Usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  )
}
