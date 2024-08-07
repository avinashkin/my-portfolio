import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/card3d";
import { PROJECTS } from "./commom";

export function ThreeDCardDemo() {
    return (
        <div className="flex flex-row flex-wrap gap-8 xl:mx-44">
            {PROJECTS.map((project, idx) => {
                return (
                    <CardContainer key={idx} className="group">
                        <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border min-h-[28rem]">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-white"
                            >
                                {project.desc}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-sm max-w-sm mt-2 text-neutral-300"
                            >
                                {project.desc2}
                            </CardItem>
                            <CardItem translateZ="90" className="w-full mt-4 shadow-emerald-500/[0.1]">
                                <img
                                    src={project.img}
                                    className="h-52 w-full object-fill rounded-xl group-hover/card:shadow-xl cursor-pointer"
                                    alt="thumbnail"
                                    onClick={() => project.url && window.open(project.url, "_blank")}
                                />
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4 flex flex-row flex-wrap gap-4">
                                {
                                    project.tech.map((t, idx) => {
                                        return (
                                            <img
                                                key={idx}
                                                src={t}
                                                className="w-8 mt-4 object-scale-down aspect-square group-hover/card:shadow-xl"
                                                alt="tech"
                                            />
                                        );
                                    })
                                }
                            </CardItem>
                            <div className="flex justify-between items-center">
                                {project.url && <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.url}
                                    target="__blank"
                                    className="mt-8 rounded-xl font-bold text-sm text-white"
                                >
                                    Go <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                                </CardItem>}
                            </div>
                        </CardBody>
                    </CardContainer>
                )
            })}
        </div>

    );
}
