import React from "react";
import foot from "../images/foot.png";
import { SOCIALS } from "./commom";

const Footer = () => {
    const renderSocials = () => {
        return (
            <div className="grid grid-cols-4 w-fit gap-12 place-items-center">
                {SOCIALS.map((icon, idx) => {
                    return <a href={icon.link} target="_blank" key={idx} className={`${icon.alt} cursor-pointer`}><img className="w-8" src={icon.src} alt="icon" /></a>
                })}
            </div>
        );
    };
    return (
        <div className="text-center">
            <hr className="mx-auto mb-24 w-10/12 text-center"/>
            <div className="text-white w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto place-items-center">
                    <div className="text-2xl">
                        <p>No <i className="fa-regular fa-copyright" style={{color: "#ffffff"}}></i> copyright issues.</p>
                    </div>
                    <div>
                        <p className="diff-font text-6xl">Avinash Gupta</p>
                        <p className="text-2xl mt-3">Made with <i className="fa-solid fa-heart" style={{ color: "#ff000d" }}></i> in India</p>
                    </div>
                    {renderSocials()}
                </div>
            </div>
            <div className="w-full h-full text-center">
                <img src={foot} alt="footer" className="w-6/12 mx-auto mt-5" />
            </div>
        </div>
    );
}

export default Footer;