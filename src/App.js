import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import Listings from "./pages/Listings"
import Rooms from "./pages/Rooms"
import Services from "./pages/Services"


import "./App.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => (
  <Router>
    <div style={{ position: "relative" }}>
      
      <Route path="/" component={Navbar} />

      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/events" component={Events}/>
      <Route path="/Listings" component={Listings}/>
      <Route path="/rooms"component={Rooms}/>
      <Route path="/services" component={Services}/>

      <Footer />

    </div>
  </Router>
)

export default App