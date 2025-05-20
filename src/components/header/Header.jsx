import "./Header.scss"
export default function Header({name, text, img, burger}) {
    
    return (
        <>
            <header className="header">
                <img src={img} alt="profile picture" />
                <div>
                    <h1>{name}</h1>
                    <p>{text}</p>
                </div>
                <div alt="burgermenu" onClick={ToggleEvent}>{burger}</div>
            </header>
        </>
    )
}