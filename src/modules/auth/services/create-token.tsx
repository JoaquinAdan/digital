import { LoginCredentialsDto } from '../dto/login-credentials.dto'
import { apiBase } from '@/configs/constants/api-base'
import { handler } from '@/http/handler'

export const createToken = (dto: LoginCredentialsDto): Promise<{ token: string }> =>
  handler(
    fetch(`${apiBase}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
  )
