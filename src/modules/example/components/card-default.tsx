import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/modules/shared/components/ui/card'
import LoadingButton from '@/modules/shared/components/ui/loading-button'

interface Props {
  image: string
  name: string
  refetch: () => void
  isLoading: boolean
}

const CardPokemon = ({ image, name, refetch, isLoading }: Props) => {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        {isLoading ? (
          <div className='relative h-56 bg-gray-300 animate-pulse'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-56 w-12 text-gray-500 m-auto'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
              />
            </svg>
          </div>
        ) : (
          <img src={image} alt={`card-image ${name}`} className='h-56 m-auto' />
        )}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className='mt-2 mb-1 h-3 w-56 rounded-full bg-gray-300'>&nbsp;</div>
        ) : (
          <CardTitle>{name}</CardTitle>
        )}
      </CardContent>
      <CardFooter className='flex justify-between'>
        <LoadingButton isLoading={isLoading} size='sm' color='purple' onClick={refetch}>
          Cargar otro
        </LoadingButton>
      </CardFooter>
    </Card>
  )
}

export default CardPokemon
