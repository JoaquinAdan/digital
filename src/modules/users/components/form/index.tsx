import DigitalInput from '@/modules/shared/components/inputs/digital-input'
import DigitalMutilAutocomplete from '@/modules/shared/components/inputs/digital-multi-autocomplete'
import { UseFormReturn } from 'react-hook-form'
import { UserFormDto } from '../../dto/user-form.dto'
import { useRolesCatalog } from '../../hooks/use-roles-catalog'

const UserForm = ({ form }: { form: UseFormReturn<UserFormDto> }) => {
  const rolesCatalog = useRolesCatalog()
  if (rolesCatalog.isLoading) return <p>Cargando...</p>

  const rolesOptions = rolesCatalog.data?.data.map(c => {
    return { label: c.displayName, value: c.id, description: c.descripcion }
  })

  return (
    <div className='md:grid md:grid-cols-2 flex flex-col gap-2 py-0 md:gap-4 md:py-4'>
      <DigitalInput name='username' placeholder='Escriba el nombre del usuario' label='Nombre' form={form} />
      <DigitalInput name='password' placeholder='Escriba la contraseña del usuario' label='Contraseña' form={form} />
      <DigitalInput name='email' placeholder='Escriba el email del usuario' label='Email' form={form} styles='col-span-2' />
      <DigitalMutilAutocomplete
        name='roles'
        options={rolesOptions}
        form={form}
        label='Roles'
        placeholder='roles'
        styles='col-span-2'
      />
    </div>
  )
}

export default UserForm
