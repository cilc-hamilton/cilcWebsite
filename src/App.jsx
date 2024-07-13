import Navbar from "./navbar/navbar.jsx"
import Mobilenav from "./navbar/mobile.jsx";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index.jsx"
import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import Donate from "./pages/donate.jsx"
import Blogs from "./pages/blogs.jsx"
import Joinus from "./pages/joinus.jsx"
import Programmes from "./pages/programmes.jsx"
import More from "./pages/more.jsx"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Mobilenav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/join-us" element={<Joinus />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </Router>
    </>
  )
}

export default App