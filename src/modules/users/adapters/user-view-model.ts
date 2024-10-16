import { User } from '../models/user'
import { UserViewModel } from '../models/user-view-model'

const toUserViewModel = (data?: User[]): UserViewModel[] => {
  if (!data) return []
  const users = data?.map(user => ({
    id: user.id,
    nombre: user.username,
    email: user.email,
  }))
  return users
}

export default toUserViewModel
