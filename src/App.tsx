import { routes } from '@/modules/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppProviders from './providers'

const router = createBrowserRouter(routes)

function App() {
  return (
    <AppProviders>
      <div className='font-sans'>
        <RouterProvider router={router} />
      </div>
    </AppProviders>
  )
}

export default App
