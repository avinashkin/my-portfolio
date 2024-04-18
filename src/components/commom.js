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

const particleConfig = {
    "fullScreen": {
        "enable": false,
        "z-index": -1
    },
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#9b9b9b"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#9b9b9b"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#9b9b9b",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    }
}

// const SKILLS = {
//     FE: [
//         {
//             s: 'HTML',
//             sp: false
//         },
//         {
//             s: 'CSS',
//             sp: false
//         },
//         {
//             s: 'React',
//             sp: false
//         },
//         {
//             s: 'JavaScript',
//             sp: false
//         },
//         {
//             s: 'Typescript',
//             sp: false
//         },
//         {
//             s: 'Redux',
//             sp: false
//         }
//     ],
// };

export {
    IMGS,
    SOCIALS,
    SKILLS,
    particleConfig
};