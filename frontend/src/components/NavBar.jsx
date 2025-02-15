import { useNavigate } from "react-router-dom";
import bike1 from "../assets/bikelogo1.jpg";

import "./NavBar.css";

function NavBar({ ITEMS }) {
    const navigate = useNavigate(); // Hook to navigate between pages

    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                 {/* Showroom Image */}
                 <div>
                    <img src={bike1} alt="Bike Showroom" className="showroom-image" />
                </div>

                {/* Center - Showroom Name */}
                <div className="showroom-name">BIKE SHOWROOM</div>
                {/* Left Side - Navigation Items */}
                <div className="nav-items-left">
                    {ITEMS.map((item, index) => (
                        <div 
                            key={index} 
                            className="nav-item"
                            onClick={() => navigate(item.path)} // Navigate to the path
                        >
                             {item.text}
                        </div>
                    ))}
                </div>

                

                {/* Right Side - Additional Options */}
                <div className="nav-items-right">
                    <div className="nav-item">Login</div>
                    <div className="nav-item">Sign Up</div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
