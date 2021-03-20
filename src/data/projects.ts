export const data = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "This website is built with Next js in typescript. \n My goals was to try different types of animations, like the Scroll magic logo animation. Some of the libs I use is Framer motion, Scroll magic, GSAP 3. \n For styling i used Chakra ui components.",
    techStack: [
      {
        title: "Next js",
        width: "60%",
        backgroundColor: "#171717",
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      {
        title: "Framer motion",
        width: "20%",
        backgroundColor: "#E902B5",
      },
      { title: "GSAP", width: "10%", backgroundColor: "#86C03C" },
      {
        title: "Scroll Magic",
        width: "10%",
        backgroundColor: "#6186D5",
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
  {
    id: 2,
    title: "Gym hub Frontend",
    description:
      "A service that help digitalize the gym / crossfit class experiense.\n Making a digital version of a whiteboard and timer, that makes it easy for instructors & class participants to understand the class structure.",
    techStack: [
      {
        title: "CRA",
        width: "60%",
        backgroundColor: "#282D32",
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      { title: "Chakra ui", width: "20%", backgroundColor: "#2CBFB3" },
      { title: "Apollo", width: "10%", backgroundColor: "#333333" },
      {
        title: "Code-gen",
        width: "10%",
        backgroundColor: "#D129A1",
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
  {
    id: 3,
    title: "Gym hub Backend",
    description:
      "This is the backend / server for the Gym hub service. \n Written in Node js (typescript) & express, using Graphql as a query language. \n Typeorm as an ORM.",
    techStack: [
      {
        title: "Typescript",
        width: "60%",
        backgroundColor: "#007acc",
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      { title: "GraphQL", width: "15%", backgroundColor: "#e535ab" },
      { title: "TypeORM", width: "15%", backgroundColor: "#FE0C05" },
      {
        title: "PostgreSQL",
        width: "10%",
        backgroundColor: "#336791",
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
];
