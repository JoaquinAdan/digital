import logoDigital from '@/assets/shared/logo-white.png'
import { cn } from '@/lib/utils'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import { Input } from '@/modules/shared/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import useAuth from '../hooks/use-auth'
import LoadingButton from '@/modules/shared/components/ui/loading-button'
import { LoginCredentialsDto } from '../dto/login-credentials.dto'

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, ingresa un email válido.' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' }),
})

const Login = () => {
  const { login, isLoadingLogin, errorLoading } = useAuth()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (credentials: LoginCredentialsDto) => {
    login(credentials)
    form.reset()
  }

  return (
    <div className='container relative h-screen items-center justify-center lg:max-w-none flex lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r flex-1'>
        <div className='absolute inset-0 bg-zinc-900 bg-[url("@/assets/shared/fondo-muni.png")]' />
        {/* <div className='absolute inset-0 bg-zinc-900 bg-[url("@/assets/shared/fondo-muni.png")]' /> */}
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <img src={logoDigital} alt='DIGITAL' className='h-8' />
          <p>Campana Digital</p>
        </div>
        <div className='relative z-20 mt-auto'>
          <p className='text-lg'>Version 1</p>
        </div>
      </div>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] flex-[0.5] px-10'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Iniciar Sesión</h1>
          <p className='text-sm text-muted-foreground'>Ingrese al sistema con las credenciales de su usuario</p>
        </div>

        <Form {...form}>
          <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Escriba su email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input placeholder='Escriba su contraseña' {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton isLoading={isLoadingLogin} className='w-full' type='submit' size='sm'>
              Ingresar
            </LoadingButton>
            <p className={cn(`text-sm font-medium text-destructive opacity-${errorLoading ? '1' : '0'} h-4`)}>
              {errorLoading}
            </p>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Login
