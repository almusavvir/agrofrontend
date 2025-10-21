import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import Footer from './components/Footer'

function App() {

  return (
   <>
   <Navbar />
   <LandingSection /> 
   {/* <UserCard />
   <UserCard /> */}
   <Footer />
   </>  
  )
}

export default App
