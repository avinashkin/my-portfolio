import React from "react";
import profile from "../images/profile_image.png";

const AboutMe = () => {
    const renderAboutSection = () => {
        return (
            <div className="flex flex-col">
                <h1 className="font-bold w-fit h-fit leading-tight tracking-tight  text-slate-300 text-5xl md:text-8xl">About Me</h1>
                <p className="text-white text-2xl mt-16">
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

    const renderImage = () => {
        return (
            <img className="w-[34rem] rounded-lg mt-28 lg:mt-0 lg:ml-8 mx-auto"  src={profile} alt="img" />
        );
    };

    return (
        <div className="w-full py-40 px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[77rem]">
                {renderAboutSection()}
                {renderImage()}
            </div>
        </div>

    );
}

export default AboutMe;