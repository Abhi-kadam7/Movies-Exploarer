import React from 'react'
import Home from './pages/Home'
import Moveidetails from './pages/Moveidetails'
import Error from './pages/Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/moveis/:id' element={<Moveidetails/>} />
     <Route path='/error' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App