import React from 'react'

function DisplayData({ firstName, lastName }) {
  return (
    <div>
        <h1 className="title">{firstName}</h1>
        <h1 className="title">{lastName}</h1>
    </div>
  )
}

export default DisplayData