import { NavLink } from "react-router"

export default function Navigation (){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/history">Travel History</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Scooter Settings</NavLink>
                </li>
                <li>
                    <NavLink to="/help">Help</NavLink>
                </li>
                <li>
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink to="/terms">Terms & Conditions</NavLink>
                </li>
            </ul>
        </nav>
    )
}