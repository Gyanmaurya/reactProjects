import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContextProvider } from './contextApi/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <TodoContextProvider>
    <App />
    </TodoContextProvider>
  </StrictMode>,
)
