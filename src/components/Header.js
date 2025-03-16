import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
    const isUserOnline = useOnlineStatus();
    const [btnName, setBtnName] = useState("Login");
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 mb-4 ">
            <div className="logo-container">
                <img className="w-32 logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {isUserOnline ? "🟢" : "⚪" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><button onClick={() => {
                        setBtnName(btnName === "Login" ? "Logout" : "Login");
                    }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;