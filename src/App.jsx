import {Routes,Route} from 'react-router-dom'
import './App.css'
import { Buysection } from './components/Buysection'
import { CollectionSection } from './components/CollectionSection'
import { MenCollection } from './components/MenCollection'
import { Navbar } from './components/Navbar'
import { PageNotFound } from './components/PageNotFound'
import { WomenCollection } from './components/WomenCollection'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CollectionSection/>}/>
        <Route path='collection' element={<Buysection/>}/>
        <Route path='men' element={<MenCollection/>}/>
        <Route path='women' element={<WomenCollection/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
