import Navbar from "./Navbar";
import { Card } from "./Propss/Card";
import "./App.css";
import a from "./images/a.jpg";
import b from "./images/b.jpg";
import c from "./images/c.jpg";
import { Colors } from "../src/Colorchangers/Colors.js";
import Passwardgen from "./PasswardGenerator/Passwardgen.js";

function App() {
  return (
    <>
      <Navbar />
      
      <div className="container" id="cont">
        <div className="main">
          <Card
            btntext="Visit me"
            name="Ajit Pawar"
            description="this is small descripion about me "
            image={a}
          />
          <Card
            btntext="Follow me"
            name="Nikhil Mahangade"
            description="this is small descripion about me "
            image={b}
          />
          <Card
            btntext="Join me"
            name="Amey Gaikwad"
            description="this is small descripion about me "
            image={c}
          />
        </div>
      </div>
      
      <Colors />
      
      <Passwardgen />
      
    </>
  );
}

export default App;
