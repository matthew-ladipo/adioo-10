import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Section from './Section'
import Section2 from './Section2'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
 

  return (
    <Router>
    <>
      <Navbar />
      <Section />
      <Section2 />
      <Footer />
    </>

    </Router>
  )
}

export default App
