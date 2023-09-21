import "./App.css";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="PageBody">
          <Home />
          <Reviews/>
          <Contact />
        </div>
      <Footer />
    </div>
  );
}

export default App;