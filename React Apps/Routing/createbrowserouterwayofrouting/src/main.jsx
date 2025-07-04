import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routing/Router'
import NavBar from './components/NavBar'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
