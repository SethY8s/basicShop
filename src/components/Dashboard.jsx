import React from 'react'



export default function Dashboard() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <p>Normal route(allowed by every one)</p>
      <button>Anyone can click me!</button>
      <p>Must be logged in to click this one</p>
      <button>Clicking me takes you to the loggin page or the acutal page!</button>
    
    </div>
  )
}
