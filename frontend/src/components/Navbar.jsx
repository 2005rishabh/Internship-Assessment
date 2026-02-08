import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    );
}
