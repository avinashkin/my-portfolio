import React from "react";
import { SKILLS } from "./commom";
import bgImg from "../images/BgImage.png";

const AboutMe = () => {
    const renderSkills = (skills = []) => {
        return (
            <div className="skills-wrapper">
                {skills?.map((skill, idx) => {
                    return (
                        <div className="child" key={idx}>
                            {skill}
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderSkillsSection = () => {
        return (
            <div className="sec tech-sec">
                <h1 className="heading tech">{`Skills & Tools`}</h1>
                <div className="skills">
                    <h3>Frontend</h3>
                    {renderSkills(SKILLS['FE'])}
                    <h3>Backend</h3>
                    {renderSkills(SKILLS['BE'])}
                    <h3>Database</h3>
                    {renderSkills(SKILLS['DB'])}
                    <h3>Others</h3>
                    {renderSkills(SKILLS['OTHERS'])}
                </div>
            </div>
        );
    };

    const renderAboutSection = () => {
        return (
            <div className="info-section">
                <div className="sec intro-sec">
                    <h1 className="heading intro">Hello</h1>
                    <div>
                        <p style={{lineHeight: "2"}}>
                            Results-driven Software Engineer with three years of hands-on experience in software development and a Master's degree in Business Analytics.
                            Adept at combining technical expertise with a deep understanding of business analytics to deliver innovative software solutions. Proven ability to optimize software systems, enhance user experiences, and drive efficiency in cross-functional teams.
                            Passionate about tackling complex challenges and leveraging analytical insights to create impactful solutions.
                        </p>
                        <p style={{lineHeight: "2"}}>
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="mailto:guptaavinash92@gmail.com" className="link">contact me</a>.
                        </p>
                    </div>
                </div>
                {renderSkillsSection()}
            </div>
        );
    };

    return (
        <>
            <img className="about-bg" src={bgImg} alt="BG" />
            <div className="hire-container">
                <button className="hire">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: "10px" }}>
                        <path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7" stroke="#35D6F7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#35D6F7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 16.5H8" stroke="#35D6F7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12.5H5" stroke="#35D6F7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Hire Me!
                </button>
            </div>
            <div className="about-container">
                {renderAboutSection()}
            </div>
        </>

    );
}

export default AboutMe;