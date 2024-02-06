import React from "react";
import bgImg from "../images/BgImage.png";

const ContactMe = () => {
    return (
        <>
            <img className="about-bg" src={bgImg} alt="BG" />
            <div className="contact-container">
                This is a container
            </div>
        </>
    );
}

export default ContactMe;