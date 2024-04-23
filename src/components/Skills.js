import React, { useEffect, useRef } from "react";
import { SKILLS } from "./commom";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Skills = () => {
    const cont = useRef(null);
    useEffect(() => {
        const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
        revealTl.fromTo(".skill",
        { opacity: 0 },
        {
            opacity: 1, duration: 0.5, stagger: 0.5
        })

        ScrollTrigger.create({
            trigger: ".skill-wrapper",
            start: "200px bottom",
            end: `center center`,
            animation: revealTl,
            scrub: 0,
        });
    }, []);

    const renderSkills = (skills = []) => {
        return (
            <div className="flex flex-row flex-wrap mt-0 md:my-8 justify-items-center skill ">
                {skills.map((skill, idx) => {
                    return <img className="w-10 md:w-16 mr-8 mt-8 md:mt-0" src={skill} alt="skill" key={idx} />
                })}
            </div>
        );
    }
    return (
        <div className="w-full" ref={cont}>
            <div className="p-16 mx-auto skill-wrapper">
                <h1 className="w-fit text-4xl sm:text-6xl text-white font-bold md:max-w-lg w-full mt-2 xl:ml-44 skill" style={{
                    background: "-webkit-linear-gradient(#9f55ff,#7000ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>Skills</h1>
                <div className="flex flex-col text-white xl:ml-44 mt-12 ">
                    <p className="text-2xl skill">Languages and Tools</p>
                    {renderSkills(SKILLS["FE"])}
                    <p className="text-2xl skill mt-8 sm:mt-0">Libraries and Frameworks</p>
                    {renderSkills(SKILLS["TF"])}
                    <div className="flex flex-row">
                        <div className="flex flex-col mr-12">
                            <p className="text-2xl skill mt-8 sm:mt-0">Databases</p>
                            {renderSkills(SKILLS["DB"])}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl skill mt-8 sm:mt-0">Others</p>
                            {renderSkills(SKILLS["OTHERS"])}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;