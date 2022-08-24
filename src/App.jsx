import {Routes,Route} from 'react-router-dom'
import './App.css'
import { Buysection } from './components/Buysection'
import { CollectionSection } from './components/CollectionSection'
import { MenCollection } from './components/MenCollection'
import { Navbar } from './components/Navbar'
import { WomenCollection } from './components/WomenCollection'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Buysection/>}/>
        <Route path='collection' element={<CollectionSection/>}/>
        <Route path='men' element={<MenCollection/>}/>
        <Route path='women' element={<WomenCollection/>}/>
      </Routes>
    </div>
  )
}

export default App
