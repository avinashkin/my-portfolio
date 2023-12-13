import home from "../images/home_icon.svg";
import info from "../images/info_icon.svg";
import contact from "../images/contact.svg";
import timeline from "../images/timeline.svg";
import doc from "../images/lucide_files.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import mailme from "../images/mailme.svg";

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
        alt: "github"
    },
    {
        src: linkedin,
        alt: "linkedin-icon"
    },
    {
        src: mailme,
        alt: "mailme-icon"
    }
];

const SKILLS = {
    FE: ['HTML', 'CSS', 'React', 'JavaScript', 'Typescript', 'Redux'],
    BE: ['Node Js', 'Express Js'],
    DB: ['MongoDB', 'MySql'],
    OTHERS: ['Python', 'PowerBi', 'Data Analytics']
};

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
    SKILLS
};