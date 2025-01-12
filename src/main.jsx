import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpApp } from './GifExpApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpApp />
  </StrictMode>,
)
