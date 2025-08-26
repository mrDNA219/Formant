import { NavLink } from "react-router";

function Navbar() {

    return (
    <>
    <nav className="navbar">
        <div className="nav-container">
            <img src="/Formant.png" className="logo-icon" alt="Logo" />
            <ul className="nav-menu">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/paints">Paints</NavLink>
                <NavLink className="nav-link" to="/recipes">Recipes</NavLink>
            </ul>
        </div>
    </nav>
    </>
    );
};

export default Navbar;