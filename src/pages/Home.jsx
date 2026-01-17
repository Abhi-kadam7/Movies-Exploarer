import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Moveis from './Moveis'
const Home = () => {
  const [Refr, setRefr] = useState(0)
  return (
    <>
    <Navbar onHomeClick={()=>{ setRefr(prev=>prev+1)}}/>
    <Moveis key={Refr}/>
    </>
  )
}

export default Home