import React from 'react'

function Chip({title, onClick}) {
  return (
    <div className='border border-purple-300 rounded-lg' onClick={onClick}>
        <h1>{title}</h1>
    </div>
  )
}

export default Chip