import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({Moveis}) => {
 
  return (
    <div className='card'>
<div className='img'>
<img  src={Moveis.Poster} alt={Moveis.Title} />
</div>
<div className='detail'>
<h5>Movei Name:{Moveis.Title}</h5>
<p>Release Year:{Moveis.Year}</p>
<button><Link to={`/moveis/${Moveis.imdbID}`}>Details</Link></button>
</div>
    </div>
  )
}

export default Card