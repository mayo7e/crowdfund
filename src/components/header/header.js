import Field from "../field/field"
import Icon from "../../icons/icon"
// import { MdMenu } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/gi";

import { PrimaryButton, SecondaryButton } from "../button/button-component";

const Header = ({handleNavClick}) => {
    return (
        <header>
            <div className="header container" >
                <div>
                {/* <MdMenu onClick={handleNavClick} icon="Menu" className="Menu" /> */}
                    {/* <GiHamburgerMenu icon="Menu" className="Menu" /> */}
                    {/* <Icon onclick={handleNavClick} icon="menu" />   */}
                  <Icon handleNavClick={handleNavClick} icon="menu" />
                </div>
                
                    <h1 >crowdfund</h1>
                    <nav className="Link" >
                        <li><a href="/" ></a>Explore</li>
                        <li><a href="/" ></a>Community</li>
                    </nav>

                    <div className="nav-container" >
                         <Field />
                    </div>
                   

                    <div className="nav-button">
                        <PrimaryButton text="Sign up" />
                        <SecondaryButton text="Login" />
                    </div>
               
            </div>
            
        </header>
      );
}
 
export default Header;