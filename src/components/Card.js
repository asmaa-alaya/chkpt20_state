import React from 'react'

function Card({person}) {
  return (
    <div>
        <div className='mycard'>
        <img src={person.img}/>
        <div className='infos'>
        <h1>{person.fullname}</h1>
        <h2>{person.profession}</h2>
        <p>{person.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Card