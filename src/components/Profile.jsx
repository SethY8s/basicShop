import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {

    const[error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

  async function handleLogout() {
    setError('')
    navigate('/')
    try{
        await logout()

        
    } catch {
        setError('failed to logout')
    }
  }

  return (
    <>
    <div className="m-auto mt-5" style={{ maxWidth: '400px' }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </div>
    </>
  );
}
