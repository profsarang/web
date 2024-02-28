import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" className="class-website-name">Astrology </Link>
                <ul>
                    <li> 
                        <Link to="/about"> About </Link> 
                    </li>
                    <li> 
                        <Link to="/contact"> Contact </Link> 
                    </li>
                    <li> 
                        <Link to="/login"> Login </Link> 
                    </li>
                </ul>
        </nav>        
    );
}

export default Navbar