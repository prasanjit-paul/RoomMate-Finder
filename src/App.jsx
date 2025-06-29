import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 
import Home from "./router/Home"
import Blog from "./router/Blog"
import Career from "./router/Career"
import Community from "./router/Community"
import Profile from "./router/Profile"

function App() {

  return (
    <>
    <Router>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/career" element={<Career />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    <footer>
        <p>Room Partner &copy; 2025. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
