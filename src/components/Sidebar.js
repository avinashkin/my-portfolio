import React, { useState } from "react";
import { IMGS } from "./commom";

const Sidebar = () => {
    const [selected, setSelected] = useState("home");

    const onClickButton = (alt = "") => {
        setSelected(alt);
    }

    const renderIcons = () => {
        return (
            <ul className="nav-menu">
                {IMGS.map(({ src, alt, href = "#" }, idx) => {
                    const isSelected = selected === alt;
                    return (
                        <li className={`nav-icon ${isSelected ? "selected" : ""}`} key={idx} onClick={() => onClickButton(alt)}>
                            <a href={href}>
                                <img className="icon-img" src={src} alt={alt} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
    return (
        <nav className="sidebar">
            {renderIcons()}
        </nav>
    );
};

export default Sidebar;