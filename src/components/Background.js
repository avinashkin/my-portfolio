import React, { useEffect, useRef } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import gsap from "gsap";
import heroImg from "../images/hero-img.svg";
import { SOCIALS } from "./commom";
import Typed from 'typed.js';

export default function Background() {
  const component = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const repeat = new Typed(typed.current, {
      strings: ['Frontend Developer.', 'Backend Developer.', 'Business Analyst.', 'Freelancer.'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
    });

    return () => repeat.destroy();
  })

  useEffect(() => {
    gsap.timeline()
      .to(".name-animation", {
        y: -7,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1
      })
      .to(".social-icon", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.2
      })
      .fromTo(".hero-img",
        { opacity: 0, x: 45 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.out",
          duration: 0.6
        })
  }, []);

  useEffect(() => {
    gsap.fromTo(".common-button", {
      opacity: 0, skewY: 10, y: 100
    }, {
      opacity: 1,
      y: 0,
      skewY: 0,
      stagger: 0.04,
      duration: 1.5
    })
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".hello-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 0.4,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name, key, classname) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block translate-y-[45rem] duration-500`}
      >
        {letter}
      </span>
    ));
  };

  const renderIntroLetters = (name, key) => {
    if (!name) return " ";
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`hello-animation hello-animation-${key}-index inline-block duration-500`}
      >
        {letter}
      </span>
    ));
  };

  const renderSocials = () => {
    return (
      <div
        className="grid grid-cols-4 w-fit gap-x-10 place-items-center	mb-5 "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {SOCIALS.map((icon, idx) => {
          return <a href={icon.link} target="_blank" key={idx} rel="noreferrer" className={`social-icon ${icon.alt} cursor-pointer translate-y-[-4rem]`}><img className="w-8" src={icon.src} alt="icon" /></a>
        })}
      </div>
    );
  };

  const renderButtons = () => {
    return (
      <div className="grid grid-cols-2 w-fit gap-3 place-items-center	">
        <a href="#contact" className="common-button rounded-2xl border-2 border-slate-800 hover:border-indigo-500/75 px-3.5 py-1 text-slate-400 text-2xl mt-3">Let's Talk</a>
      </div>
    );
  };

  const renderTyped = () => {
    return (
      <div className="text-white text-xl font-bold mb-8">
        <span>I'm a <span ref={typed}></span></span>
      </div>
    )
  }

  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center md:justify-center antialiased overflow-hidden	">
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-49rem lg:w-[75rem] mx-auto p-4 lg:p-0 z-10 " ref={component}>
        <div className="mt-24 md:mt-0">
          <span className="hello-animation text-4xl font-black text-indigo-700 ml-2" aria-label="Hey, I'm">{renderIntroLetters("Hey,", "first")}</span>
          &nbsp;
          <span className="hello-animation text-4xl font-black text-indigo-700" aria-label="Hey, I'm">{renderIntroLetters("I'm", "first")}</span>
          <h1
            className="mb-5 text-[6rem] lg:text-[9rem] leading-none tracking-tighter text-white font-black"
            aria-label="Avinash Gupta"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <span className="block text-slate-300 ">
              {renderLetters("Avinash", "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500  ">
              {renderLetters("Gupta", "last")}
            </span>
          </h1>
          {renderTyped()}
          {renderSocials()}
          {renderButtons()}
        </div>
        <div>
          <img className="hero-img absolute w-3/4 bottom-0 translate-x-[45rem] opacity-0" src={heroImg} alt="hero-img" />
        </div>
      </div>
      <BackgroundBeams className="dark" />
    </div>
  );
}
