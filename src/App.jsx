import { useState } from 'react'
import './App.css'
import { Buysection } from './components/Buysection'
import { CollectionSection } from './components/CollectionSection'
import { Navbar } from './components/Navbar'
import { SneakerSection } from './components/SneakerSection'


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      {/* <Buysection/> */}
      <CollectionSection/>
      {/* <SneakerSection/> */}
    </div>
  )
}

export default App
