import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Container 
    classname="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh"}}>
      <div className="m-auto mt-5"
      style={{ maxWidth: "400px"}}>
    <Signup />
    </div>
    </Container>
    </AuthProvider>
  );
}

export default App;
