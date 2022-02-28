import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './Login'

function App() {
  return (
    <Container
      classname="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="m-auto mt-5" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="login" element ={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
        
      </div>
    </Container>
  );
}

export default App;
