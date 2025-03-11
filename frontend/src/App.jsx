import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About";
import Navbar from "./components/Navbar";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}
