import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation"
import whitney from "/imgs/whitney.svg"
import burgerIcon from "/imgs/icons/Union.svg"


export default function Settings() {
    return (
        <>
            <Header
                img={whitney}
                name="Whitney Leon"
                text="Welcome back !"
                burger={burgerIcon}
            />
            <main>
                <Navigation />
                <p>Version 10.0.1</p>
            </main>
        </>
    )
}