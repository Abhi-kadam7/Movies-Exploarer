import { useState,useEffect,useRef } from 'react'
import './Moveis.css'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

const Moveis = () => {
    const [Moveis, setMoveis] = useState([])
    const Catch = useRef(null)
    const navigate=useNavigate()
    const data=async(query)=>{
        let raw= await fetch(`https://www.omdbapi.com/?s=${query}&apikey=244f9c25`);
        let data2= await raw.json();
        console.log(data2);
        
       if (data2.Response ==='True') {
  const uniqueMovies = Array.from(
    new Map(data2.Search.map(item => [item.imdbID, item])).values()
  )
  setMoveis(uniqueMovies)
}
else{
    setMoveis([])
     navigate('/error')
}

    }
   
    useEffect(() => {
      data("Avengers")
    }, [])
   
let handleSubmit=(e)=>{
e.preventDefault()
let query=Catch.current.value.trim();
if(query){
    data(query)
}
}

    
  return (
    <div className='main'>
<form onSubmit={handleSubmit}>
    <div className='search'>
    <input className='inp' ref={Catch} type="search" placeholder='search moveis....'/>
    <button className='btn'>Search</button>
</div>
</form>
<div className='movies'>
{
     Moveis.map((ele)=>{
        return <Card key={ele.imdbID} Moveis={ele}/>})

}
</div>
    </div>
  )
}

export default Moveis