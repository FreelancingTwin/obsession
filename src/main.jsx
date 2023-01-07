import React from 'react'
import ReactDOM from 'react-dom/client'
import './body.css'
import './components/clock.css'
import './components/navbar.css'
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
