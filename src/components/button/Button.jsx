import { Link } from "react-router";

export default function Button ({billede, link, text, icon}){
    return (
        <Link className="btn" to={link}>
            {billede && <img src={billede}></img>}
            {text && <p>{text}</p>}
            {icon && <div>{icon}</div>}
        </Link>
    )
}