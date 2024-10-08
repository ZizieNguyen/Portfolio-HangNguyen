import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster position='top-center'
                    toastOptions={{
                        duration: 7000,
                        style: {
                            backgroundColor: 'white',
                            color: '#594d46',
                            borderRadius: '100px',
                            textAlign: 'center',
                        },
                    }} reverseOrder={false} />
  </StrictMode>,
)
