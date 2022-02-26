import Signup from "./Signup"
import { Container } from "react-bootstrap"

function App() {
  return (
    <Container 
    classname="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh"}}>
      <div className="m-auto mt-5"
      style={{ maxWidth: "400px"}}>
    <Signup />
    </div>
    </Container>
  );
}

export default App;
