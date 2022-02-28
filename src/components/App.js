import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AuthProvider>
        </Router>
        
      </div>
    </Container>
  );
}

export default App;
