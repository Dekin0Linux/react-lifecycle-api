import React from 'react'

function FunctinCard({user,index}) {
  return (
    <div key={index} className='card'>
        <h3>Name: {user.name}</h3>
        <p>Username : {user.username}</p>
        <p>Email : {user.email}</p>
    </div>
  )
}

export default FunctinCard