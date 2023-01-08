import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/body.css'
import './styles/clock.css'
import './styles/navbar.css'
import Clock from './components/Clock'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Clock/>
    <Footer/>
  </React.StrictMode>,
)
