import Header from "../components/header/Header"
import whitney from "/imgs/whitney.svg"
import burgerIcon from "/imgs/icons/Union.svg"
import scooter from "/imgs/scooter.svg"
import lockIcon from "/imgs/icons/lock.svg"
import Cards from "../components/cards/cards"
import { useEffect, useState } from "react"
import Information from "../components/information/Information"
import Lock from "../components/lock/Lock"
import "./Myscooter.scss"


export default function Myscooter() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setCards(data.cards))
    }, [])

    return (
        <>
            <Header
                img={whitney}
                name="Whitney Leon"
                text="Welcome back !"
                burger={burgerIcon}
            />
            <main>
                <Information
                header="We updated your scooter"
                p="Everything your scooter needed we did it for you."
                img={scooter}
                />

                <Lock 
                    header="Whitney’s Scooter"
                    text="Locked"
                    icon={lockIcon}
                />
                {cards.map(card => (
                    <Cards 
                        key={card.id}
                        header={card.header}
                        icon={card.image}
                        specifics={card.specification}
                    />
                ))}
            </main>
        </>
    )
}