import { useState, useEffect, useRef } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initiaStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initiaStateDarkMode);

    const refHeader = useRef(null);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            // console.log(refHeader.current);
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8" ref={refHeader}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold tracking-[0.3em] text-white uppercase">
                    todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <MoonIcon iconColor="#FFF" /> : <SunIcon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
