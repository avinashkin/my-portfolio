import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const Project = () => {
    
    return (
        <div className="p-16">
            <h1
                className="w-fit text-6xl text-white font-bold mt-2 xl:ml-44"
                style={{
                    background: "-webkit-linear-gradient(#9f55ff,#7000ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                My Projects so Far
            </h1>
            <ThreeDCardDemo />
        </div>
    );
};

export default Project;