import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[url('/ciberseguridad.png')] min-h-screen min-w-screen bg-cover bg-center ">
    <App />
    </div>
  </React.StrictMode>
)
