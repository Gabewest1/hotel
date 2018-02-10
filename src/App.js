import React from 'react'
import {
  BrowserRouter as Router,
<<<<<<< HEAD
  Route,
  Link,
  Switch
=======
  Route
>>>>>>> 0055ab337b7aa5075ffcf5778c8a43493ce43374
} from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import Listings from "./pages/Listings"
import Rooms from "./pages/Rooms"
import Services from "./pages/Services"

import "./App.css"

const App = () => (
  <Router>
    <div style={{ position: "relative" }}>
      
      <Route path="/" component={Navbar} />

      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/events" component={Events}/>
      <Route path="/Listings" component={Listings}/>
      <Route path="/rooms" component={Rooms}/>
      <Route path="/services" component={Services}/>

    </div>
  </Router>
)

export default App