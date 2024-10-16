import UpdateUser from '../use-cases/update-user'

export default function Actions({ id }: { id: number }) {
  return (
    <div className='flex gap-2'>
      <UpdateUser id={id} />
    </div>
  )
}
