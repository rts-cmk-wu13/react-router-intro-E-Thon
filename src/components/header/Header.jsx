export default function Header({name, text, img, burger}) {
    return (
        <>
            <header>
                <img src={img} alt="profile picture" />
                <div>
                    <h1>{name}</h1>
                    <p>{text}</p>
                </div>
                <img src={burger} alt="burgermenu" onClick={ToggleEvent} />
            </header>
        </>
    )
}