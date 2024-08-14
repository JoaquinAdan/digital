// import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'

// interface Props {
//   image: string
//   name: string
//   refetch: () => void
//   isLoading: boolean
// }

// export function CardPokemon({ image, name, refetch, isLoading }: Props) {
//   return (
//     <Card className='w-96'>
//       {isLoading ? (
//         <>
//           <CardHeader className='relative h-56 bg-gray-300 animate-pulse'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={2}
//               stroke='currentColor'
//               className='h-56 w-12 text-gray-500 m-auto'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
//               />
//             </svg>
//           </CardHeader>
//           <CardBody>
//             <Typography as='div' variant='h1' className='mt-4 mb-3 h-3 w-56 rounded-full bg-gray-300'>
//               &nbsp;
//             </Typography>
//           </CardBody>
//         </>
//       ) : (
//         <>
//           <CardHeader color='blue-gray' className='relative h-56'>
//             <img src={image} alt={`card-image ${name}`} className='h-56 m-auto' />
//           </CardHeader>
//           <CardBody>
//             <Typography variant='h5' color='blue-gray' className='mb-2 capitalize'>
//               {name}
//             </Typography>
//           </CardBody>
//         </>
//       )}
//       <CardFooter className='pt-0'>
//         <Button loading={isLoading} color='purple' onClick={refetch}>
//           Cargar otro
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }
