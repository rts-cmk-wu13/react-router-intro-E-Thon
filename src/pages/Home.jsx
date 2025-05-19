import Button from "../components/button/Button"
import logo from "/imgs/Rockit-logo.svg"
import homeImg from "/imgs/home.svg"
import chevronRight from "/imgs/icons/chevrons-right.svg"

export default function Home () {
    return (
        <>
        <header>
            <img src={logo} alt="Rockit logo" />
            <h1>Rockit</h1>
        </header>
        <main>
            <section>
                <h2>
                    Your scooter in one app
                </h2>
                <img src={homeImg} alt="Scooter introduction image on home screen" />
                <p>Everything you need to know about your scooter is available here in your app</p>
                <Button 
                link="profile"
                billede={chevronRight}
                />
          
            </section>
        </main>
        </>
    )
}