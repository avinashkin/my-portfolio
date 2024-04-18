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

    // const renderAboutSection = () => {
    //     return (
    //         <div className="info-section">
    //             <div className="sec intro-sec">
    //                 <h1 className="heading intro">Hello</h1>
    //                 <div>
    //                     <p style={{ lineHeight: "2" }}>
    //                         Results-driven Software Engineer with three years of hands-on experience in software development and a Master's degree in Business Analytics.
    //                         Adept at combining technical expertise with a deep understanding of business analytics to deliver innovative software solutions. Proven ability to optimize software systems, enhance user experiences, and drive efficiency in cross-functional teams.
    //                         Passionate about tackling complex challenges and leveraging analytical insights to create impactful solutions.
    //                     </p>
    //                     <p style={{ lineHeight: "2" }}>
    //                         I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="mailto:guptaavinash92@gmail.com" className="link">contact me</a>.
    //                     </p>
    //                 </div>
    //             </div>
    //             {renderSkillsSection()}
    //         </div>
    //     );
    // };
    const renderAboutSection = () => {
        return (
            <div className="grid grid-rows-2">
                <h1 className="font-bold leading-tight tracking-tight  text-slate-300 text-5xl md:text-8xl">About Me</h1>
                <p className="text-white text-2xl">
                    Welcome to my corner of the web! I'm, a full stack developer passionate about creating user-friendly solutions.
                    I enjoy building websites and applications that make life easier and more enjoyable for people. Curiosity drives me to learn new technologies.
                </p>
                &nbsp;
                <p className="text-white text-2xl">
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to
                    &nbsp;
                    <a href="mailto:guptaavinash92@gmail.com" className="underline underline-offset-2 decoration-indigo-500">contact me</a>.
                </p>
            </div>
        );
    };

    return (
        <div className="w-full py-40">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[77rem]">
                {renderAboutSection()}
            </div>
        </div>

    );
}

export default AboutMe;