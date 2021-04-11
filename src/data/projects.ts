import { Item } from "../types/item";

export const data: Item[] = [
  {
    id: 1,
    title: "Gym hub",
    type: "Frontend",
    description:
      "A service that help digitalize the gym / crossfit class experiense.\n Making a digital version of a whiteboard and timer, that makes it easy for instructors & class participants to understand the class structure.",
    link: "https://github.com/JakobClausen/ex-timer-web",
    techStack: [
      {
        title: "CRA",
        icon: "/images/react.svg",
        width: "50%",
        backgroundColor: "#04D8FE",
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      {
        title: "Chakra",
        icon: "/images/chakra.png",
        width: "20%",
        backgroundColor: "#2CBFB3",
      },
      {
        title: "Apollo",
        icon: "/images/apollo.svg",
        width: "15%",
        backgroundColor: "#333333",
      },
      {
        title: "Code",
        icon: "/images/codeGen.png",
        width: "15%",
        backgroundColor: "#D129A1",
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
  {
    id: 2,
    title: "Gym hub",
    type: "Backend",
    description:
      "This is the backend / server for the Gym hub service. \n Written in Node js (typescript) & express, using Graphql as a query language. \n Typeorm as an ORM.",
    link: "https://github.com/JakobClausen/ex-timer-server",
    techStack: [
      {
        title: "Typescript",
        icon: "/images/ts-icon.svg",
        width: "60%",
        backgroundColor: "#007acc",
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      {
        title: "GraphQL",
        icon: "/images/graphql.svg",
        width: "15%",
        backgroundColor: "#FE0C05",
      },
      {
        title: "TypeORM",
        icon: "/images/typeorm.png",

        width: "15%",
        backgroundColor: "#e535ab",
      },
      {
        title: "PostgreSQL",
        icon: "/images/postgres.svg",
        width: "10%",
        backgroundColor: "#336791",
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    type: null,
    description:
      "This website is built with Next js in typescript. \n My goals was to try different types of animations, like the Scroll magic logo animation. Some of the libs I use is Framer motion, Scroll magic, GSAP 3. \n For styling i used Chakra ui components.",
    link: "https://github.com/JakobClausen/portfolio",
    techStack: [
      {
        title: "Next js",
        icon: "/images/next.svg",
        width: "50%",
        backgroundColor: "#1b1b1b",
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      {
        title: "Framer",
        icon: "/images/motion.png",
        width: "20%",
        backgroundColor: "#E902B5",
      },
      {
        title: "GSAP",
        icon: "/images/gsap.svg",
        width: "15%",
        backgroundColor: "#86C03C",
      },
      {
        title: "Scroll",
        icon: "/images/scroll.png",
        width: "15%",
        backgroundColor: "#6186D5",
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
];
