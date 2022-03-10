import Signup from './Signup';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './Login'
import Profile from './Profile'
import ForgotPassword from './ForgotPassword';
import { Navbarcomp } from './Navbarcomp';
import SingleItem from './singleItem/SingleItem'
import Cart from './cart/Cart'




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
            <Navbarcomp />
            <Routes>
              
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element ={<Login />} />
              <Route path="/profile" element ={<Profile />} />
              <Route path="/forgot-password" element ={<ForgotPassword />} />
              <Route path="/cart" element ={<Cart />} />
              <Route path="/product/:id" element ={<SingleItem />} />
            </Routes>
          </AuthProvider>
        </Router>
        
      
     </div>
  );
}

export default App;
