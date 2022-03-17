import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/"><h1> my TO-DO</h1></Link>
            
            <div className="links">
                <Link to="/work">work</Link>
                <Link to="/school">school</Link>
                <Link to="/relationship">relationship</Link>
            </div>
        </div>
     )
}
 
export default Navbar;