import React from "react";
import { SKILLS } from "./commom";

const Skills = () => {
    const renderSkills = (skills = []) => {
        return (
            <div className="flex flex-row my-8">
                {skills.map((skill, idx) => {
                    return <img className="w-12 mr-8" src={skill} alt="skill" key={idx} />
                })}
            </div>
        );
    }
    return (
        <div className="w-full">
            <div className="p-16 mx-auto">
                <h1 className="w-fit text-6xl text-white font-bold md:max-w-lg w-full mt-2 ml-44" style={{
                    fontSize: "72px",
                    background: "-webkit-linear-gradient(#9f55ff,#7000ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>Skills</h1>
                <div className="flex flex-col text-white ml-44 mt-12">
                    <p className="text-2xl">Languages and Tools</p>
                    {renderSkills(SKILLS["FE"])}
                    <p className="text-2xl">Libraries and Frameworks</p>
                    {renderSkills(SKILLS["TF"])}
                    <div className="flex flex-row">
                        <div className="flex flex-col mr-12">
                            <p className="text-2xl">Databases</p>
                            {renderSkills(SKILLS["DB"])}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl">Others</p>
                            {renderSkills(SKILLS["OTHERS"])}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;