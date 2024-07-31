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
import Resources from "./pages/resources.jsx"
import Joinus from "./pages/joinus.jsx"
import Programmes from "./pages/programmes.jsx"
import More from "./pages/more.jsx"
import Member from "./pages/membership.jsx";
import Support from "./pages/supporters.jsx";
import Volunteer from "./pages/volunteer.jsx";
import Team from "./pages/team.jsx";
import Org from "./pages/org.jsx";
import Book from "./pages/book.jsx";
import Celebrations from "./pages/celebrations.jsx";
import Newsletters from "./pages/newsletters.jsx";
import Videos from "./pages/videos.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/team" element={<Team/>}/>
          <Route path="/about/organization" element={<Org/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/resources/book-nook" element={<Book/>}/>
          <Route path="/resources/cultural-celebrations" element={<Celebrations/>}/>
          <Route path="/resources/past-newsletters" element={<Newsletters/>}/>
          <Route path="/resources/videos" element={<Videos/>}/>
          <Route path="/join-us" element={<Joinus/>}/>
          <Route path="/join-us/volunteer" element={<Volunteer/>}/>
          <Route path="/join-us/become-a-member" element={<Member/>}/>
          <Route path="/join-us/supporters" element={<Support/>}/>
          <Route path="/programmes" element={<Programmes/>}/>
          <Route path="/more" element={<More/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App