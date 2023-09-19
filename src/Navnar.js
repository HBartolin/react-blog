import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/c">New Blog</a>
                {/* 
                    <Link to="/">Home</Link>
                    <Link to="/c" style={{ 
                        color: 'white', 
                        backgroundColor: '#f1356d',
                        borderRadius: '8px' 
                    }}>New Blog</Link>
                */}
            </div>
        </nav>
     );
}
 
export default Navbar;

/*
style={{
    color: "white",
    backgroundColor: '#f1356d',
    borderRadius: '8px'
}}
*/