import { routes } from '@/modules/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppProviders from './providers'

const router = createBrowserRouter(routes)

function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  )
}

export default App
