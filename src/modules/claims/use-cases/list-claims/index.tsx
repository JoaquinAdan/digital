import { ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/solid'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from '@material-tailwind/react'

const TABS = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Monitored',
    value: 'monitored',
  },
  {
    label: 'Unmonitored',
    value: 'unmonitored',
  },
]

const TABLE_HEAD = ['Vecino', 'Tipo de reclamo', 'Estado', 'Observación', 'Barrio', 'Creación', '']

const TABLE_ROWS = [
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
    name: 'Juan Riquelme',
    email: 'juan@creative-tim.com',
    type: 'Poda',
    location: { lat: -34.163249, long: -58.959197 },
    neighborhood: 'Praderas',
    state: true,
    observation: 'El árbol está muy grande y tapa la luz del alumbrado público.',
    date: '23/04/18',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
    name: 'Hernesto Levis',
    email: 'hernesto@creative-tim.com',
    type: 'Ilumnaria',
    location: { lat: -34.163249, long: -58.959197 },
    neighborhood: 'Lubo',
    state: false,
    observation: 'La luz de la cuadra no funciona.',
    date: '24/12/08',
  },
]

export function ClaimsTable() {
  return (
    <Card className='w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <Tabs value='all' className='w-full md:w-max'>
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className='w-full md:w-72'>
            <Input label='Search' icon={<MagnifyingGlassIcon className='h-5 w-5' />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className=' px-0'>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
                  >
                    {head} {index !== TABLE_HEAD.length - 1 && <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ img, name, email, type, state, observation, date, neighborhood }, index) => {
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className='flex items-center gap-3'>
                      <Avatar src={img} alt={name} size='sm' />
                      <div className='flex flex-col'>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {name}
                        </Typography>
                        <Typography variant='small' color='blue-gray' className='font-normal opacity-70'>
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className='flex flex-col'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {type}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className='w-max'>
                      <Chip
                        variant='ghost'
                        size='sm'
                        value={state ? 'resuelto' : 'pendiente'}
                        color={state ? 'green' : 'blue-gray'}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className='w-max'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {observation}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className='w-max'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {neighborhood}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content='Edit User'>
                      <IconButton variant='text'>
                        <PencilIcon className='h-4 w-4' />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          Page 1 of 10
        </Typography>
        <div className='flex gap-2'>
          <Button variant='outlined' size='sm'>
            Previous
          </Button>
          <Button variant='outlined' size='sm'>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
