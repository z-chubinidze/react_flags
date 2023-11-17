import React, { useState, useEffect } from "react";
import "./Nav.css";
import dark from "./moon-dark.svg";
import light from "./moon-light.svg";

function Nav() {
    const [buttonText, setButtonText] = useState("light mode");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [inputColor, setInputColor] = useState("#000");
    const [selectColor, setSelectColor] = useState("#000");
    useEffect(() => {
        // change body background color dynamically based on the mode
        document.body.style.backgroundColor = isDarkMode ? "#fff" : "#2b2b2b";
        document.body.style.color = isDarkMode ? "#000" :  "#fff";

        // change info-box background color and text colors
        const infoElements = document.querySelectorAll(".info-box");
        infoElements.forEach((infoElement) => {
            if (infoElement) {
                infoElement.style.backgroundColor = isDarkMode ? "#fff" : "#2b2b2b";
                infoElement.style.color = isDarkMode ? "#000" : "#fff";
            }
        });
        // change forms background color and text colors
            // change input background
        const formColors = document.getElementById("input");
        if (formColors) {
            formColors.style.backgroundColor = isDarkMode ? "#fff" : "#2b2b2b";
            formColors.style.color = isDarkMode ? "#000" : "#fff";
        };
        // change select forms background color and text colors
        const selectColors = document.querySelectorAll(".select");
        selectColors.forEach((selectColor) => {
            if (selectColor) {
                selectColor.style.backgroundColor = isDarkMode ? "#fff" : "#2b2b2b";
                selectColor.style.color = isDarkMode ? "#000" : "#fff";
            }
        });
    }, [isDarkMode, inputColor, selectColor]);

    
    const darkLightMode = () => {
        setButtonText((prevText) => (prevText === "light mode" ? "dark mode" : "light mode"));
        setIsDarkMode((prevMode) => !prevMode);
        setInputColor((prevColor) => (prevColor === "#000" ? "#ffffff" :"#2b2b2b"));
        setSelectColor((prevColor) => (prevColor === "#000" ? "#ffffff" : "#2b2b2b"))

    };

    return (
        <header className={isDarkMode ? "light-mode pt-2 pb-2 " : "dark-mode pt-2 pb-2"}>
            <div className="container ps-4 ps-md-3">
                <div className="d-flex align-items-center justify-content-between">
                    <h2 className={isDarkMode ? "world light-text mb-0" : "world dark-text mb-0"}>
                        Where in the world?
                    </h2>
                    <button
                        className={isDarkMode ? "btn d-flex align-items-center text-dark gap-3 btn-transparent border-0" : "btn d-flex align-items-center text-light gap-3 btn-transparent border-0" }
                        onClick={darkLightMode}
                    >
                        <img src={isDarkMode ? dark : light} alt={isDarkMode ? "dark mode" : "light mode"} />
                        {buttonText}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Nav;
