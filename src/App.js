import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Myskill from "./components/Myskill";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Myskill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
