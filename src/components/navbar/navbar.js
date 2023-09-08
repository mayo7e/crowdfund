

const Navbar = ({show}) => {
    return ( 
        <div className={show ? "nav-bar active" : "nav-bar"} >
            <ul className="nav-items" >
                <li><a className="nav-item" href="/" >Discover</a></li>
                <li><a className="nav-item" href="/" >Browse Project</a></li>
                <li><a className="nav-item" href="/" >Backed Projects</a></li>
                <li><a className="nav-item" href="/" >Start Project </a></li>
                <li><a className="nav-item" href="/" >Messages</a></li>
                <li><a className="nav-item" href="/" >Community</a></li>
            </ul>
        </div>
     );
}
 
export default Navbar;