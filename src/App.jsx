import About from "./components/About";
// import Contact from "./components/Contact";
import DisplayWorks from "./components/DisplayWorks";
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<DisplayWorks />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App