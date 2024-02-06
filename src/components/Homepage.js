import React from "react";
import profilePic from "../images/profile_image.png";
import mail from "../images/mail.svg";
import downloadImg from "../images/download.svg";

import { SOCIALS } from "./commom";


const HomePage = () => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="profile">
                    <img className="profile-img" src={profilePic} alt="profile" />
                </div>
                <span className="name">Avinash Gupta</span>
                <br />
                <span>
                    {/* <span className="pos">I am</span> */}
                    <h1 className="title">{`Software Developer`}</h1>
                </span>
                {/* <p className="desc">A results-driven Software Engineer with three years of hands-on experience in frontend development and a Master's degree in Business Analytics. Adept at combining technical expertise with an understanding of business analytics to deliver innovative software solutions.</p> */}
            </div>
            <div className="socials">
                <div style={{ display: "flex", gap: "15px" }}>
                    <button className="hire"><img src={mail} alt="mail" style={{ marginRight: "10px" }} />Hire Me!</button>
                    <button className="resume"><img src={downloadImg} alt="download" style={{ marginRight: "10px" }} />Resume</button>
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                    {SOCIALS.map(({ src, alt }, idx) => {
                        return (
                            <button className="social-icons" key={idx}>
                                <img src={src} alt={alt} />
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="mouse-scroll">
                <div className="mouse" />
            </div>
        </div>
    );
}

export default HomePage;