import Button from "../components/button/Button"
import logo from "/imgs/Rockit-logo.svg"
import homeImg from "/imgs/home.svg"
import "./Home.scss"
import { FiChevronsRight } from "react-icons/fi";
import { useEffect } from 'react';

export default function Home () {
  useEffect(() => {
    document.body.style.background = "#55418E";
    return () => {
      document.body.style.background = ""; // reset on unmount
    };
  }, []);

    return (
        <>
        <header className="homescreen-header">
            <img src={logo} alt="Rockit logo" />
            <h1>Rockit</h1>
        </header>
        <main className="home-main">
            <section>
                <h2>
                    Your scooter in one app
                </h2>
                <img src={homeImg} alt="Scooter introduction image on home screen" />
                <p>Everything you need to know about your scooter is available here in your app</p>
                <Button className="btn"
                link="profile"
                icon={<FiChevronsRight />}
                />
          
            </section>
        </main>
        </>
    )
}