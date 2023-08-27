import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Section from './Section'
import Section2 from './Section2'
import Footer from './footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Section />
      <Section2 />
      <Footer />
    </>
  )
}

export default App
