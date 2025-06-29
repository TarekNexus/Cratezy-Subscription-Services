import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/routes'
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<><RouterProvider router={router} />     
  <ToastContainer></ToastContainer>    
  </>
</AuthProvider>
  </StrictMode>,
)
