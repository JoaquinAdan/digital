import { apiBase } from '@/configs/constants/api-base'
import { UserFormDto } from '../dto/user-form.dto'
import { handler } from '@/http/handler'

export const putUserHttp = (payload: UserFormDto, token: string, id: number): Promise<unknown> => {
  console.log(payload)
  return handler(
    fetch(`${apiBase}/Usuarios/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: payload.email,
        Username: payload.username,
        Password: payload.password,
        RoleIds: payload.roles.map(role => role.value),
      }),
    }),
  )
}
