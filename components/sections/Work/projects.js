import Todo from '../../../public/assets/1920Todo.png'
import LearnLaw from '../../../public/assets/1920LearnLaw.png'
import Smoothies from '../../../public/assets/GabrielsSmoothies.png'
import Linkly from '../../../public/assets/LinklyURLShortener.png'
import Space from '../../../public/assets/spacetours.png'
import SPHX from '../../../public/assets/Sphx.png'
import Shopster from '../../../public/assets/1920Shopster.png'
import DC from '../../../public/assets/1920DesignCircle.png'
import Crypto from '../../../public/assets/1920Crypto.png'
import Loop from '../../../public/assets/Loopstudios.jpeg'
import Mdundo from '../../../public/assets/1920Mdundo.png'
import Eloni from '../../../public/assets/Eloni.png'



export const projects = [
    {
        name: "Mdundo For Brands",
        link: "https://mdundoforbrands.netlify.app/",
        stack: ["NextJS", "React"],
        description: "Redevelopment of a new design for an African music streaming platform. Made with NextJs and took Search Engine Optimizations in consideration in order to increase brand visibility on search engines.",
        imgSrc: Mdundo,
        platform: "frontend",
        color: "blue"
    },
    {
        name: "Eloni Marketplace",
        link: "https://elonimarket.com/",
        stack: ["NextJS", "Redux"],
        description: "A contract for the development of an ecommerce website writing web code in alignment with supplied design files on Figma and integrating a backend API by another developer for the accomplishment of the application. Made use of Nextjs, Typescript, Redux, SocketIO, TailwindCSS for the client site.",
        imgSrc: Eloni,
        platform: "frontend",
        color: "skyblue"
    },
    {
        name: "Design Cricle Global Services",
        link: "https://design-circle.vercel.app/",
        stack: ["NextJS", "React"],
        description: "A contract for the development of a website writing web code in alignment with supplied design files on Figma. Made use of Nextjs and SCSS for the client site.",
        imgSrc: DC,
        platform: "frontend",
        color: "pink"
    },
    {
        name: "Learn Nigerian Law",
        link: "https://www.learnnigerianlaw.com/",
        stack: ["NextJS", "React"],
        description: "A live service providing educational materials on the Nigerian Legal System as taught in Nigerian schools. Created in Next.js and in collaboration with another developer to leverage the SEO, prerendering and multipage capabilities of Next.js",
        imgSrc: LearnLaw,
        platform: "frontend",
        color: "darkpink"
    },
    {
        name: "Crypto Time Travel",
        link: "https://crypto-time-travel.vercel.app/",
        stack: ["NextJS", "React"],
        description: "Made with NextJS, TailwindCSS and the CoinGecko API. Feeds a user calculated results based on their input and information from the crypto market api.",
        imgSrc: Crypto,
        platform: "frontend",
        color: "greypink"
    },
    {
        name: "Todo App Tracker",
        link: "https://todoapptracker.netlify.app/",
        stack: ["React"],
        description: "Made with React.js functional components and hooks. Also uses the LocalStorage API to persist todo data on page refresh",
        imgSrc: Todo,
        platform: "frontend",
        color: "skyblue"
    },
    {
        name: "Gabriel's Smoothies",
        link: "https://express-gabriels-smoothies.onrender.com",
        stack: ["NodeJS", "ExpressJS", "MongoDB", "JWT"],
        description: "Made with NodeJS, Express and MongoDB. For logged in users to create recipes, view them and delete the recipes. Implemented protected routes for certain pages and features using JSON Web Tokens and Web Cookies.",
        imgSrc: Smoothies,
        platform: "backend",
        color: "blue"
    },
    {
        name: "Linkly URL Shortener",
        link: "https://express-url-shortener-vrf3.onrender.com",
        stack: ["NodeJS", "ExpressJS", "MongoDB"],
        description: "Made with NodeJS, Express, EJS and MongoDB. A straightfoward application that allows a user to shorten a link by interacting with the backend API through the views. Also records in the database the number of times a specific short link has been used.",
        imgSrc: Linkly,
        platform: "backend",
        color: "greypink"
    },
]