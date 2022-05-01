import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom'


export default function SecretComp() {
    
    const { currentUser } = useAuth();
    
    if(currentUser === null){
        return <Navigate to='/login' />
    }

  return (
    <div>Hey you are logged in!</div>
  )
}
