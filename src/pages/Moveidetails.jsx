import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import'./Moveidetails.css'
const Moveidetails = () => {
const [Movei, setMovei] = useState({})
const {id}=useParams()
useEffect(() => {
  let set=async()=>{
    let temp=await fetch(` http://www.omdbapi.com/?i=${id}&apikey=244f9c25`)
    let data= await temp.json();
    console.log(data);
    setMovei(data)
  }
  set()
}, [id])

  return (
       <>
        <Navbar/>
        <div className='main2'>
            <img src={Movei.Poster} alt={Movei.Title} />
            <h2>Movei Name : {Movei.Title}</h2>
            <h3>Director : {Movei.Director}</h3>
            <h4>Genre : {Movei.Genre}</h4>
            <h4>Language : {Movei.Language}</h4>
            <h4>Collection : {Movei.BoxOffice}</h4>
            <h4>Release Date : {Movei.Released}</h4>
            <p><strong>Plot : </strong>{Movei.Plot}</p>
        </div>
       </>
  )
}

export default Moveidetails