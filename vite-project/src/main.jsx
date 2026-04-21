import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactUs from './Contact'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContactUs />
  </StrictMode>,
)
