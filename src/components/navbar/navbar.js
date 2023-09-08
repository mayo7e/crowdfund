

const Navbar = ({show}) => {
    return ( 
        <div className={show ? "nav-bar active" : "nav-bar"} >
            <ul className="nav-items" >
                <li><a className="nav-item" href="/" >Explore</a></li>
                <li><a className="nav-item" href="/" >Profile</a></li>
                <li><a className="nav-item" href="/" >Productivity</a></li>
                <li><a className="nav-item" href="/" >Productivity</a></li>
                <li><a className="nav-item" href="/" >Productivity</a></li>
            </ul>
        </div>
     );
}
 
export default Navbar;