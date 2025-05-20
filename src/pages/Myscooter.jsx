import Header from "../components/header/Header"
import whitney from "/imgs/whitney.svg"
import scooter from "/imgs/scooter.svg"
import lockIcon from "/imgs/icons/lock.svg"
import Cards from "../components/cards/cards"
import { useEffect, useState } from "react"
import Information from "../components/information/Information"
import Lock from "../components/lock/Lock"
import "./Myscooter.scss"
import { FiShare, FiBatteryCharging, FiMap, FiZap } from "react-icons/fi";
import CornerDotsIcon from "../components/icon/Icon"
import { MdLock } from "react-icons/md";

export default function Myscooter() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setCards(data.cards))
    }, [])

    const iconMap = {
        FiMap: <FiMap />,
        FiBatteryCharging: <FiBatteryCharging />,
        FiZap: <FiZap/>,
        FiShare: <FiShare />
    }
    return (
        <>
            <Header
                img={whitney}
                name="Whitney Leon"
                text="Welcome back !"
                burger={<CornerDotsIcon/>}
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
                    icon={<MdLock/>}
                />
                {cards.map(card => (
                    <Cards 
                        key={card.id}
                        header={card.header}
                        icon={iconMap[card.image]}
                        specifics={card.specification}
                    />
                ))}
            </main>
        </>
    )
}