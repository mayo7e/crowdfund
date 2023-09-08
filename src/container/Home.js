
import {PrimaryButton, PrimaryButtonDisabled, SecondaryButton, SecondaryButtonDisabled,
     WhiteButton, WhiteButtonDisabled, ButtonAsLink, CounterButton} from "../components/button/button-component"
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";

import { useState } from "react";


const Home = () => {
    const [showNav, setShowNav] = useState(false)

    const handleNavClick = ()=> setShowNav(!showNav)

    
    return ( 
        <div>
            {/* <h1 className="heading-lg-semibold">Hello World</h1> */}
            {/* <PrimaryButton /> */}
            {/* <Header onClick ={()=> setShowNav(!showNav)} /> */}
            <Header handleNavClick ={handleNavClick} />
             <Navbar show ={showNav} />
        </div>
    );
}
 
export default Home;