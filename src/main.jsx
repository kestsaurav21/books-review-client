import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookContext, BookProvider } from './context/BookContext.jsx'

createRoot(document.getElementById('root')).render(

  <BookProvider>
        <App />
  </BookProvider>
)
