import { Button } from '@/modules/shared/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/modules/shared/components/ui/form'
import logoDigital from '@/assets/shared/logo-white.png'
import { Input } from '@/modules/shared/components/ui/input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({
    message: 'Por favor, ingresa un email válido.',
  }),
  password: z.string().min(8, {
    message: 'La contraseña debe tener al menos 8 caracteres.',
  }),
})

const Login = () => {
  const navigate = useNavigate()
  // const { login } = useAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const [error] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  async function onSubmit() {
    setLoading(true)
    // const isSuccess = await login(values.email, values.password)
    setLoading(false)
    // if (!isSuccess) {
    //   setError('Credenciales incorrectas')
    //   return
    // }
    navigate('/incidents')
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
          {/*  <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my clients
              faster than ever before.&rdquo;
            </p>
            <footer className='text-sm'>Sofia Davis</footer>
          </blockquote> */}
          <p className='text-lg'>Version 1</p>
        </div>
      </div>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] flex-[0.5] px-10'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Iniciar Sesión</h1>
          <p className='text-sm text-muted-foreground'>Ingrese al sistema con las credenciales de su usuario</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
            <p className={cn('text-sm font-medium text-destructive', { hidden: !error })}>{error}</p>
            <Button type='submit' disabled={loading}>
              <Loader2 className={`r-2 h-4 w-4 mr-2 animate-spin ${loading ? 'block' : 'hidden'}`} />
              Ingresar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Login
