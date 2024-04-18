import home from "../images/home_icon.svg";
import info from "../images/info_icon.svg";
import contact from "../images/contact.svg";
import timeline from "../images/timeline.svg";
import doc from "../images/lucide_files.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import mailme from "../images/mailme.svg";
import cpp from "../images/cpp.svg";
import css from "../images/css.svg";
import git from "../images/git.svg";
import html from "../images/html.svg";
import javascript from "../images/javascript.svg";
import mysql from "../images/mysql.svg";
import node from "../images/nodejs.svg";
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import sass from "../images/sass.svg";
import tailwind from "../images/tailwindcss.svg";
import typescript from "../images/typescript.svg";
import webpack from "../images/webpack.svg";
import postman from "../images/postman.svg";


const IMGS = [
    {
        src: home,
        alt: "home",
        href: "#home"
    },
    {
        src: info,
        alt: "info-icon",
        href: "#about"
    },
    {
        src: timeline,
        alt: "time-icon",
        href: "#timeline"
    },
    {
        src: doc,
        alt: "doc-icon"
    },
    {
        src: contact,
        alt: "contact-icon"
    }
];

const SOCIALS = [
    {
        src: github,
        alt: "github",
        link: ""
    },
    {
        src: linkedin,
        alt: "linkedin-icon",
        link: ""
    },
    {
        src: mailme,
        alt: "mailme-icon",
        link: "mailto:guptaavinash92@gmail.com"
    }
];

const SKILLS = {
    FE: [html, css, sass, javascript, typescript, cpp, webpack, node],
    TF: [react, redux, tailwind],
    DB: [mysql],
    OTHERS: [git, postman]
};


export {
    IMGS,
    SOCIALS,
    SKILLS
};