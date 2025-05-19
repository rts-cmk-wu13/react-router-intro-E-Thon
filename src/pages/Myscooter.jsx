import Header from "../components/header/Header"
import whitney from "/imgs/whitney.svg"
import burgerIcon from "/imgs/icons/Union.svg"

export default function Myscooter () {
    return (
        <Header 
        img={whitney}
        name="Whitney Leon"
        text="Welcome back !"
        burger={burgerIcon}
        />
    )
}