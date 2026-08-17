import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './print/print.css'
import { PrintResume } from './print/PrintResume'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrintResume />
  </StrictMode>,
)
