import { routes } from '@/modules/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppProvider from './providers/providers'

const router = createBrowserRouter(routes)

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
