import { useState,useEffect,useRef } from 'react'
import './Moveis.css'
import Card from '../components/Card'

const Moveis = () => {
    const [Moveis, setMoveis] = useState([])

    const data=async(query)=>{
        let raw= await fetch(`http://www.omdbapi.com/?s=${query}&apikey=244f9c25`);
        let data2= await raw.json();     
        setMoveis(data2.Search)
    }
   
    
    useEffect(() => {
      data("Avengers")

    }, [])
    
  return (
    <div className='main'>
<div className='search'>
    <input className='inp' type="search" placeholder='search moveis....'/>
    <button className='btn'>Search</button>
</div>
<div className='movies'>
{
    Moveis.map((ele)=>{
        return <Card Moveis={ele}/>
    })
}
</div>
    </div>
  )
}

export default Moveis