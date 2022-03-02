import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './Login'
import Profile from './Profile'

function App() {
  return (
    <Container
      classname="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      
      
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="login" element ={<Login />} />
              <Route path="profile" element ={<Profile />} />
            </Routes>
          </AuthProvider>
        </Router>
        
      
    </Container>
  );
}

export default App;
