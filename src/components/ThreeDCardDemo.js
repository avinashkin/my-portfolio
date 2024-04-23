import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/card3d";
import { PROJECTS } from "./commom";

export function ThreeDCardDemo() {
    return (
        <div className="flex flex-row flex-wrap gap-8 xl:mx-44">
            {PROJECTS.map((project, idx) => {
                return (
                    <CardContainer key={idx} className="group">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border h-[30rem]">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-neutral-600 dark:text-white"
                            >
                                {project.desc}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {project.desc2}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src={project.img}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                {project.url && <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
                                >
                                    Go →
                                </CardItem>}
                            </div>
                        </CardBody>
                    </CardContainer>
                )
            })}
        </div>

    );
}