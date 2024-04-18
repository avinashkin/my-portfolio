import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsScroll = () => {
    const component = useRef(null);
    const techList = [
        { tech_name: "HTML CSS JavaScript Typescript React Redux", tech_color: "#EFD81D" },
        { tech_name: "Postman Web Development UI Webpack NodeJs GSAP", tech_color: "#F388E7" },
    ];
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400);
                    },
                    ease: "none",
                    duration: 1,
                }
            );
        }, component);
        return () => ctx.revert();
    }, []);
    return (
        <section id="skills" className="mt-20 wrapper overflow-hidden" ref={component}>
            <div className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 whitespace-nowrap tech-item text-6xl font-extrabold uppercase tracking-tighter">
                {Array(6)
                    .fill(
                        " HTML CSS JavaScript Typescript React Redux "
                    )
                    .reduce((str, el) => str.concat(el), "")}{" "}
            </div>
            <div className="my-6 text-center font-extrabold text-white text-8xl">
                Want to <span className="text-indigo-500">Collaborate</span> ?
            </div>
            <div className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 whitespace-nowrap tech-item text-6xl font-extrabold uppercase tracking-tighter">
                {Array(6)
                    .fill(
                        " Postman Web Development UI Webpack NodeJs GSAP "
                    )
                    .reduce((str, el) => str.concat(el), "")}{" "}
            </div>

        </section>
    );
}

export default SkillsScroll;