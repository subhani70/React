import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalContext from './context/GlobalaContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </StrictMode>,
)
