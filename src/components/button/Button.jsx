import { Link } from "react-router";

export default function Button ({billede, link, text}){
    return (
        // <Link to={link}>{billede}</Link>
        <Link to={link}>
            {billede && <img src={billede}></img>}
            {text && <p>{text}</p>}
        </Link>
    )
}