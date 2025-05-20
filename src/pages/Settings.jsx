import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation"
import whitney from "/imgs/whitney.svg"
import "./Settings.scss"
import { FiX } from "react-icons/fi"
import { useEffect } from "react"

export default function Settings() {
    useEffect(() => {
        document.body.style.background = "#55418E";
        return () => {
          document.body.style.background = ""; // reset on unmount
        };
      }, []);

    return (
        <>
            <Header
                img={whitney}
                name="Whitney Leon"
                text="+91 6787978287"
                burger={<FiX/>}
            />
            <main>
                <Navigation />
                <p>Version 10.0.1</p>
            </main>
        </>
    )
}