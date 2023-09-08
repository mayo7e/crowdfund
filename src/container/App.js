
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import BrowseProject from "./BrowseProject"

import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";

import { useState } from "react";




function App() {
  const [showNav, setShowNav] = useState(false)
  const handleNavClick = ()=> setShowNav(!showNav)

  return (
    <div className="App">
     <Router>
          {/* <h1 className="heading-lg-semibold">Hello World</h1> */}
            {/* <PrimaryButton /> */}
            {/* <Header onClick ={()=> setShowNav(!showNav)} /> */}
            <Header handleNavClick ={handleNavClick} />
             <Navbar show ={showNav} />

                <div className="main">
                  <Routes>
                        <Route exact path="/" element={<Home/>} />
                          <Route path="/browse-project" element={<BrowseProject />} />
                  </Routes>
                </div>

     </Router>
  
    </div>
  );
}

export default App;
