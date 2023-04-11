import { useState } from 'react'
import './App.css'
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';

function App() {

    const day = "Tuesday 4/11/23"

  return (
    <div className="App">
      <Header />
      <h3>Today is {day}</h3>
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
