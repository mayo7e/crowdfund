import Field from "../field/field"
import Icon from "../../icons/icon"

import { PrimaryButton, SecondaryButton } from "../button/button-component";

const Header = () => {
    return (
        <header>
            <div className="header container" >

                    <Icon icon="menu" />      
                    <h1>crowdfund</h1>
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