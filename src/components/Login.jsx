import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
       navigate('/')
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <>
    <div className="mt-5 m-auto" style={{ maxWidth: '400px' }}>
      <Card >
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>

            <Form.Group id="passpword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>

            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to={'/forgot-password'}>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="../signup">Sign Up</Link>
      </div>
      <div className="w-100 text-center mt-2">
         <Link to="/">Home</Link>
      </div>
    </>
  );
}
