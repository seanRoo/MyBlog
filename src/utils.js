import {
  faUser,
  faLaptopCode,
  faFileAlt,
  faUniversalAccess,
  faFutbol,
} from '@fortawesome/free-solid-svg-icons'
import {
  ReactJs,
  Angular,
  Testinglibrary,
  Javascript,
  Typescript,
  Java,
  Cplusplus,
  Csharp,
  Codeceptjs,
  Firebase,
  Mongodb,
  Postgresql,
  Html5,
  CssThree,
  NodeDotJs,
  Python,
  Stackoverflow,
  Git,
  Jenkins,
  Github,
  Bamboo,
  Jira,
} from '@icons-pack/react-simple-icons'
import { BiFootball, BiDumbbell } from 'react-icons/bi'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'
import { IoPizzaOutline } from 'react-icons/io5'
import { MdPlaylistAddCheck } from 'react-icons/md'

export const hobbies = [
  {
    title: 'Football',
    icons: [{ value: BiFootball, color: 'black' }],
  },
  {
    title: 'Gym',
    icons: [{ value: BiDumbbell, color: 'black' }],
  },
  {
    title: 'Travel',
    icons: [{ value: GiAirplaneDeparture, color: 'black' }],
  },
  {
    title: 'Tech',
    icons: [{ value: MdComputer, color: 'black' }],
  },
  {
    title: 'Food',
    icons: [{ value: IoPizzaOutline, color: 'black' }],
  },
  {
    title: 'Evenly numbered lists',
    icons: [{ value: MdPlaylistAddCheck, color: 'black' }],
  },
]
export const skills = [
  {
    title: 'TypeScript/JavaScript',
    icons: [
      { value: Typescript, color: '#3178c6', size: 36 },
      { value: Javascript, color: '#F1DE4F', size: 36 },
    ],
    body: 'Before working with any UI frameworks I developed solid knowledge of JavaScript fundamentals in university and continue to use it daily in my day job and side projects. Recently I have made an effort to adopt TypeScript for that added type safety and use it exclusively in my current development position.',
  },
  {
    title: 'React, React Native & Angular',
    icons: [
      { value: ReactJs, color: '#61dbfb' },
      { value: Angular, color: 'red' },
    ],
    body: 'Angular 2 was my first extensive experience with a front-end framework, using it in my Final Year Project in college. Though when I began working in the industry I quickly realised React was the way forward and made it my framework of choice from then on. I use React nearly every single day in my day job and various side projects and have recently began familiarising myself with building apps with React Native.',
  },
  {
    title: 'React Testing Library & Enzyme',
    icons: [{ value: Testinglibrary, color: 'red' }],
    body: "I gained all front end testing knowledge through on-the-job learning and feel like I have a good understanding of good & bad practices when it comes to writing unit & integration tests. I first worked with Enzyme but soon became familar with React Testing Library and grew fond of their testing ethos compared to Enzyme. I've found that when coupled with Mock Service Worker, RTL can provide huge amounts of reliable app test coverage and even allow the removal of huge clunky end-to-end test suites.",
  },
  {
    title: 'Codecept & Protractor',
    icons: [{ value: Codeceptjs, color: 'gold' }],
    body: 'I have written a lot of end-to-end tests in both Codecept and Protractor and I believe they do have their place when testing apps, I do tend to prefer providing code coverage with integrations or units though.',
  },
  {
    title: 'Firebase, MongoDB & PostgreSQL',
    icons: [
      { value: Firebase, color: 'orange' },
      { value: Mongodb, color: 'green' },
      { value: Postgresql, color: 'darkblue' },
    ],
    body: "I really have only worked on the back-end side of things in college and on personal projects but I would never be shy about using one if needed. I was always working with SQL Databases throughout college, especially in my Spatial Databases Postgraduate class. My final year project was a MEAN application so I worked a log with Mongo also. Currently getting to know Firebase in the app I'm developing, Ting!",
  },
  {
    title: 'NodeJs, Java, C# and more',
    icons: [
      { value: NodeDotJs, color: 'green' },
      { value: Java, color: 'blue' },
      { value: Csharp, color: 'purple' },
      { value: Python, color: '#456E9C' },
      { value: Cplusplus, color: 'darkblue' },
    ],
    body: "Ranked by level of rustiness! I work with Node almost daily, but I have to say I haven't used the others in a while! I do miss working with Java, it was the first language I learned and worked with it extensively throughout college. I have a small bit of industry experience with C# and I'm familiar with Python, have been dipping my toe in and out of Machine Learning courses for the last year!",
  },
  {
    title: 'HTML & CSS, Web Accessibility',
    icons: [
      { value: Html5, color: '#DE6E3C' },
      { value: CssThree, color: '#53A7DC' },
      {
        value: faUniversalAccess,
        color: 'blue',
        isAlternateIcon: true,
      },
    ],
    body: 'My current job also invloves writing WCAG 2.1 compliant JS code to cater for our differently abled users.',
  },
  {
    title: 'Stack Overflow',
    icons: [{ value: Stackoverflow, color: 'orange' }],
    body: `Like most developers, I credit my degrees to this community (Maybe YouTube tutorials should also take some credit). StackOverflow has also helped me feel a
      little bit less of an imposter in my few years as a Software Engineer, so it deserves that credit too!`,
  },
  {
    title: 'Developer Tools',
    icons: [
      { value: Git, color: '#f14e32' },
      { value: Github, color: 'black' },
      { value: Jenkins, color: '#D24939' },
      { value: Jira, color: 'blue' },
      { value: Bamboo, color: 'green' },
    ],
    body: (
      <ul style={{ paddingLeft: 20 }}>
        <li>Git</li>
        <li>GitHub</li>
        <li>Jenkins</li>
        <li>Jira</li>
        <li>Bamboo</li>
        <li>Stash</li>
      </ul>
    ),
  },
]

export const sidenavTabs = [
  {
    text: 'About Me',
    icon: faUser,
    ref: 'aboutMeRef',
  },
  { text: 'Tech', icon: faLaptopCode, ref: 'portfolioRef' },
  //{ text: 'CV', icon: faFileAlt, ref: 'cvRef' },
  { text: 'Hobbies', icon: faFutbol, ref: 'hobbiesRef' },
  //{ text: 'Blog', icon: faBlog },
]
