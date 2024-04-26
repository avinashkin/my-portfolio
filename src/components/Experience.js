import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import srm from "../images/srm.png";
import amdocs from "../images/amdocs.png";
import uos from "../images/uos.png";
import freelance from "../images/freelance.png";

const Experience = () => {
    const renderExperienceTiles = () => {
        return (
            <VerticalTimeline className="!mx-0 !mt-8">
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(98, 216, 78)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid rgb(98, 216, 78)" }}
                    date="Mar 2024 - Present"
                    iconStyle={{ background: "#fff", color: "#fff" }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                src={freelance}
                                alt={"freelance"}
                                className="w-[78%] h-[78%] object-cover"
                            />
                        </div>
                    }
                >
                    <h3 className="text-slate-900 text-[24px] font-extrabold">
                        Freelance
                    </h3>
                    <h4 className="text-green-950 text-secondary text-[20px] font-bold">
                        Remote
                    </h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                            Working with multiple US based clients for their web applications.
                        </li>
                        <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                            Working as the web developer with MERN stack and Rust.
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#d6b588", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #d6b588" }}
                    date="Sep 2022 - Dec 2023"
                    iconStyle={{ background: "#fff", color: "#fff" }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                src={uos}
                                alt={"uni"}
                                className="w-[80%] h-[80%] object-contain"
                            />
                        </div>
                    }
                >
                    <h3 className="text-slate-900 text-[24px] font-extrabold">
                        Masters Business Analytics and Management Science
                    </h3>
                    <h4 className="text-red-950 text-secondary text-[20px] font-bold">
                        University of Southampton, UK
                    </h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                            Grade: Merit
                        </li>
                    </ul>
                    <p className="text-slate-900 tracking-wide">
                        Python, PowerBI, Excel, Anylogic, Project Management, Optimization
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#d6b588", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #d6b588" }}
                    date="Jan 2021 - Sep 2022"
                    iconStyle={{ background: "#fff", color: "#fff" }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                src={amdocs}
                                alt={"amdocs"}
                                className="w-[96%] h-[96%] object-contain"
                            />
                        </div>
                    }
                >
                    <h3 className="text-slate-900 text-[24px] font-extrabold">
                        Software Developer
                    </h3>
                    <h4 className="text-red-950 text-secondary text-[20px] font-bold">
                        Amdocs
                    </h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                            {`Developed a web application for one of the largest telecom providers – Vodafone`}
                        </li>
                        <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                            Worked on modern web technologies - ReactJs, TypeScript and Redux for state management
                        </li>
                        <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                            Translated client requirements, wireframes,
                            and Invision designs into polished final products, utilizing optimized development strategies and rigorous testing.
                        </li>
                    </ul>
                    <p className="text-slate-900 tracking-wide">
                        ReactJs, webpack, Redux, Figma
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e93572", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #e93572" }}
                    date="July 2019 - Jan 2021"
                    iconStyle={{ background: "#fff", color: "#fff" }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                src={amdocs}
                                alt={"freelance"}
                                className="w-[86%] h-[86%] object-contain"
                            />
                        </div>
                    }
                >
                    <h3 className="text-white text-[24px] font-extrabold">
                        Software Engineering Associate
                    </h3>
                    <h4 className="text-white text-secondary text-[20px] font-bold">
                        Amdocs
                    </h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        <li className="text-white font-semibold text-[14px] pl-1 tracking-wide">
                            Fixed bugs and critical incidents.
                        </li>
                        <li className="text-white font-semibold text-[14px] pl-1 tracking-wide">
                            Comprehensive training in ReactJS and JavaScript,
                            coupled with a deep understanding of the functional areas of the project.
                        </li>
                        <li className="text-white font-semibold text-[14px] pl-1 tracking-wide">
                            Received Maverick Award for excellence and outstanding performance.
                        </li>
                    </ul>
                    <p className="text-white tracking-wide">
                        UI Developer, React, Redux, User Experience, Git
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#5FB4FA", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #5FB4FA" }}
                    date="April 2017 - April 2017"
                    iconStyle={{ background: "#fff", color: "#fff" }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                src={srm}
                                alt={"comp"}
                                className="w-[100%] h-[100%] object-contain"
                            />
                        </div>
                    }
                >
                    <h3 className="text-slate-900 text-[24px] font-extrabold">
                        Event Organizer
                    </h3>
                    <h4 className="text-cyan-950 text-secondary text-[20px] font-bold">
                        SRM Innovate 2017
                    </h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        <li className="text-slate-950 font-semibold text-[14px] pl-1 tracking-wide">
                            Organized a hackerrank coding competition - Code Jack 5.0 for college's technical fest.
                        </li>
                        <li className="text-slate-950 font-semibold text-[14px] pl-1 tracking-wide">
                            Designed engaging posters for the event.
                        </li>
                    </ul>
                    <p className="text-slate-950 tracking-wide">
                        Graphic designing, Competition Host
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#ffdd3c", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #ffdd3c" }}
                    date="July 2015 - May 2019"
                    iconStyle={{ background: "#fff", color: "#fff" }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                src={srm}
                                alt={"uni"}
                                className="w-[100%] h-[100%] object-contain"
                            />
                        </div>
                    }
                >
                    <h3 className="text-slate-900 text-[24px] font-extrabold">
                        B.Tech, CSE
                    </h3>
                    <h4 className="text-black text-secondary text-[20px] font-bold">
                        SRM institute of Science and Technology
                    </h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        <li className="text-slate-950 font-semibold text-[14px] pl-1 tracking-wide">
                            Grade: 83.74%
                        </li>
                    </ul>
                    <p className="text-slate-950 tracking-wide">
                        DSA, Algorithms, Operating Systems, OOPs, DBMS, Computer Networks,
                        Python, C++, Java
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        );
    };

    return (
        <div className="p-16 xl:ml-44 text-white">
            <h1 className="w-fit text-4xl sm:text-6xl text-white font-bold w-full mt-2 mb-4" style={{
                background: "-webkit-linear-gradient(#9f55ff,#7000ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>Experience & Education</h1>
            {renderExperienceTiles()}
        </div>
    );
};

export default Experience;