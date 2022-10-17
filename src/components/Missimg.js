import React from 'react'
import { Link } from 'react-router-dom'

export default function Missimg() {
  return (
    <div className="container">
      <div className='error ' >
        404
      </div>
      <p>Page Not Found...</p>
      <Link to={"/"}>go Back To Homepage</Link>
    </div>

  )
}
