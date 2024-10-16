import { apiBase } from '@/configs/constants/api-base'
import { UserFormDto } from '../dto/user-form.dto'
import { handler } from '@/http/handler'

export const createUserHttp = (payload: UserFormDto, token: string): Promise<unknown> => {
  console.log(payload)
  return handler(
    fetch(`${apiBase}/Usuarios`, {
      method: 'POST',
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
