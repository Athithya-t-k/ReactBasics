import React from 'react'

function Card({user}) {
  return (
    <div className='bg-red-400 w-60 h-60  border-black border rounded-md'>
    
      {user.name}
      {user.email}
    </div>
  ) 
}

export default Card
