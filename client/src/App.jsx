import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import './assets/styles/index.css'

import  Header  from './components/Header'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
