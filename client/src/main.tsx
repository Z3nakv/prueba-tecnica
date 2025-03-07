import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sales from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Sales />
    </div>
  </StrictMode>,
)
