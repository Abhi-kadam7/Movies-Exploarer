import React from 'react'
import './Card.css'
const Card = ({Moveis}) => {
    console.log(Moveis);
    
  return (
    <div className='card'>
<div className='img'>
<img  src={Moveis.Poster} alt={Moveis.Title} />
</div>
<div className='detail'>
<h5>Movei Name:{Moveis.Title}</h5>
<p>Release Year:{Moveis.Year}</p>
<p>Type:{Moveis.Type}</p>
<button>Details</button>
</div>
    </div>
  )
}

export default Card