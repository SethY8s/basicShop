import Signup from './Signup';
// import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './Login'
import Profile from './Profile'
import '../styles/styles.css'

function App() {
  return (
    //div once was a container
    <div
    
      classname="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh',
    width: '100%' }}
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
        
      
     </div>
  );
}

export default App;
