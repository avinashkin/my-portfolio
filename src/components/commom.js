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
import vf from "../images/vodafone.jpeg";
import folio from "../images/portfolio.png";
import unigrad from "../images/unigrad.png";
import exp from "../images/expressreviews.png";
import mui from "../images/material-ui.svg";
import mongo from "../images/mongodb.svg";


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
        link: "https://github.com/avinashkin"
    },
    {
        src: linkedin,
        alt: "linkedin-icon",
        link: "https://www.linkedin.com/in/avinashguptakin/"
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

const PROJECTS = [
    {
        img: vf,
        url: "",
        desc: "Digital - Vodafone Romania",
        desc2: "Amdocs",
        tech: [react, redux, typescript, webpack, sass, postman]
    },
    {
        img: folio,
        url: "https://avinashgupta.netlify.app/",
        desc: "Portfolio",
        desc2: "Innovative design and functionality.",
        tech: [react, javascript, tailwind ]
    },
    {
        img: unigrad,
        url: "https://unigrad.herokuapp.com/login",
        desc: "UniGrad",
        desc2: "A complete College Management App",
        tech: [react, redux, javascript, node, mui, mongo, postman]
    },
    {
        img: exp,
        url: "https://github.com/avinashkin/expressBookReviews",
        desc: "Express Book Reviews",
        desc2: "Books review backend",
        tech: [node, javascript]
    }
];


export {
    IMGS,
    SOCIALS,
    SKILLS,
    PROJECTS
};