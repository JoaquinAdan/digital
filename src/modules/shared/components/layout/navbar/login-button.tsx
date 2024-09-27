import PATHS from '@/configs/constants/paths'
import useAuth from '@/modules/auth/hooks/use-auth'
import { Button } from '@/modules/shared/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'

const LoginButton = ({ width }: { width: string }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      {user ? (
        <div className={`flex justify-center space-x-2 max-${width}`}>
          <Avatar>
            <AvatarImage src='https://github.com/vercel.png' />
            <AvatarFallback className='bg-purple-200'>
              {user?.name?.split(' ')?.[0]?.[0]}
              {user?.name?.split(' ')?.[1]?.[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className='text-sm font-semibold text-nowrap'>{user.name?.split(' ')[0]}</h4>
            <div className='flex items-center'>
              <button className='text-xs text-muted-foreground whitespace-nowrap' onClick={logout}>
                cerrar sesión
              </button>
            </div>
          </div>
        </div>
      ) : (
        // <LoadingButton isLoading={isLoadingLogin} className={width} size='sm' onClick={login}>
        <Button className={width} size='sm' onClick={() => navigate(PATHS.PUBLIC.AUTH + PATHS.PUBLIC.LOGIN)}>
          Iniciar sesión
        </Button>
      )}
    </>
  )
}

export default LoginButton
