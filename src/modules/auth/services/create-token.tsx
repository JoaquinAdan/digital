import { LoginCredentialsDto } from '../dto/login-credentials.dto'
import { apiBase } from '@/configs/constants/api-base'
import { handler } from '@/http/handler'
import { User } from '../models/user'

export const createToken = (payload: LoginCredentialsDto): Promise<{ token: string; usuario: User }> =>
  handler<{ token: string; usuario: User }>(
    fetch(`${apiBase}/auth/munidigital/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }),
  )
