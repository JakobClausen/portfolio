import { Item } from '../types/item';

export const data: Item[] = [
  {
    id: 1,
    title: 'Gym hub',
    type: 'Frontend',
    description:
      'A service that help digitalize the gym / crossfit class experiense.\n Making a digital version of a whiteboard and timer, that makes it easy for instructors and class participants to understand the class structure. \n \n This project started of as a simple timetracking app for gym classes, to easier keep the class in its timeframe. Link to the first version of this project "here" \n Now i have expanded on this idea, creating a digitalized version of the whiteboard ',
    link: 'https://github.com/JakobClausen/ex-timer-web',
    techStack: [
      {
        title: 'CRA',
        icon: '/images/react.svg',
        width: '50%',
        backgroundColor: '#04D8FE',
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      {
        title: 'Chakra',
        icon: '/images/chakra.png',
        width: '20%',
        backgroundColor: '#2CBFB3',
      },
      {
        title: 'Apollo',
        icon: '/images/apollo.svg',
        width: '15%',
        backgroundColor: '#333333',
      },
      {
        title: 'Code',
        icon: '/images/codeGen.png',
        width: '15%',
        backgroundColor: '#D129A1',
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
    images: [
      'https://camo.githubusercontent.com/1b37f8ac4964f9fb39deeae37e7f6e1f94b1e4e780d5dfb7babac4d05202a034/68747470733a2f2f692e6962622e636f2f7a366e597946732f53637265656e73686f742d323032302d31312d32302d61742d31302d35392d31332e706e67',
      'https://camo.githubusercontent.com/147a439c2e2cc3eee88c104c9a1163d131c3cbaff9a370adf9ce132d1576e044/68747470733a2f2f692e6962622e636f2f485848683871342f6261636b6f66666963652e706e67',
    ],
  },
  {
    id: 2,
    title: 'Gym hub',
    type: 'Backend',
    description:
      'This is the backend / server for the Gym hub service. \n\n Written in Node js & express, using Graphql as a query language. \n\n I went with a SDL type of approach for defining my graphql layer and used a library called type-graphql to defined my schemas and resolvers, this worked really good together with my ORM of choice Type-ORM. Both use classes and decorators. \nAs a database a went with PostgreSQL (Open-source FTW).',
    link: 'https://github.com/JakobClausen/ex-timer-server',
    techStack: [
      {
        title: 'Typescript',
        icon: '/images/ts-icon.svg',
        width: '60%',
        backgroundColor: '#007acc',
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      {
        title: 'GraphQL',
        icon: '/images/graphql.svg',
        width: '15%',
        backgroundColor: '#FE0C05',
      },
      {
        title: 'TypeORM',
        icon: '/images/typeorm.png',

        width: '15%',
        backgroundColor: '#e535ab',
      },
      {
        title: 'PostgreSQL',
        icon: '/images/postgres.svg',
        width: '10%',
        backgroundColor: '#336791',
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
  {
    id: 3,
    title: 'Portfolio',
    type: null,
    description:
      "This website is built with Next js in typescript. \n\n My goals was to try different types of animations, like the Scroll magic logo animation. Some of the libs I use is Framer motion, Scroll magic, GSAP 3. \n For styling i used Chakra ui components. \n\n I plan on adding a article section in the future, for me to write about some of the topics i'm passioned about. Along with an article section i'm also planing on adding a CMS system.",
    link: 'https://github.com/JakobClausen/portfolio',
    techStack: [
      {
        title: 'Next js',
        icon: '/images/next.svg',
        width: '50%',
        backgroundColor: '#1b1b1b',
        borderStyle: { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
      },
      {
        title: 'Framer',
        icon: '/images/motion.png',
        width: '20%',
        backgroundColor: '#E902B5',
      },
      {
        title: 'GSAP',
        icon: '/images/gsap.svg',
        width: '15%',
        backgroundColor: '#86C03C',
      },
      {
        title: 'Scroll',
        icon: '/images/scroll.png',
        width: '15%',
        backgroundColor: '#6186D5',
        borderStyle: { borderBottomRightRadius: 5, borderTopRightRadius: 5 },
      },
    ],
  },
];
