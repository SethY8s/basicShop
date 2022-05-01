import React from 'react'
import { Link } from 'react-router-dom'



export default function Dashboard() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      
      <p>Must be logged in to click this one</p>
      <Link to='/secret'><button>Clicking me takes you to the loggin page or the acutal page!</button></Link>
    
    </div>
  )
}
