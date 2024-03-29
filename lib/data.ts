import chessGame from '@/public/chessGame.png'
import cypress from '@/public/cypress.png'
import glTodos from '@/public/glTodos.png'
import messengerClone from '@/public/messenger-clone.png'
import quill from '@/public/quill.png'
import wardrobeWonder from '@/public/wardrobe-wonders.png'
import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { LuChefHat, LuGraduationCap } from 'react-icons/lu'

//links for nav
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export type SectionName = (typeof links)[number]['name']

export const experiencesData = [
  {
    title: 'Software Engineer',
    location: 'New Market, Auckland',
    description: `Designing,
    coding, testing, and maintaining software
    applications. Responsibilities include coding,
    design, testing, collaboration, documentation,
    problem-solving, version control, CI/CD
    implementation, security compliance, adapting to
    industry trends, and project management.
    Specialization areas include front-end, back
   end, mobile, or DevOps.`,
    icon: React.createElement(CgWorkAlt),
    date: '02/2024 - Present',
  },
  {
    title: 'Freelancer',
    location: 'New Market, Auckland',
    description: `Moving on from the course from Dev Academy, I immersed myself into learning and exploring new technologies, building and deploying quite a few full-stack projects. Also currently contributing to a YouTube channel with 11k+ subscribers, 50-100k+ views videos and an active discord community.`,
    icon: React.createElement(CgWorkAlt),
    date: '09/2023 - Present',
  },
  {
    title: 'Student - Fullstack Developer',
    location: 'New Market, Auckland',
    description:
      'I graduated from Level 6 in Applied Software Development course from Dev Academy Aotearoa. I gained practical experience through pair programming and weekly group projects. Also developed strong collaboration, communication, and problem solving skills. I have been equipped with technical skills and a commitment to lifelong learning for a successful apps&sites development career.',
    icon: React.createElement(LuGraduationCap),
    date: '06-09/2023',
  },
  {
    title: 'Sous Chef',
    location: 'Mission Bay, Auckland',
    description: `Exceptional leadership skills honed through orchestrating kitchen operations and managing teams. Strong ability to delegate tasks efficiently while maintaining a clear vision of culinary goals. Profound teamwork experience in high-pressure kitchen environments, fostering cooperation, communication, and problem-solving. Adaptability, meticulous attention to detail, and a commitment to delivering exceptional results.`,
    icon: React.createElement(LuChefHat),
    date: '2014-2023',
  },
] as const
export type ExperienceData = (typeof experiencesData)[number]

export const projectsData = [
  {
    title: 'Cypress',
    description:
      'A Saas notion killer app with realtime collaboration features. Demo without signing up? Test account test2@example.com, with password 123321.',
    tags: [
      'React',
      'Next.js',
      'Supabase',
      'Tailwind',
      'DrizzleORM',
      'PostgreSQL',
      'socket.io',
      'QuillEditor',
      'Stripe',
    ],
    imageUrl: cypress,
    link: 'https://cypress-collaboration.up.railway.app/',
  },
  {
    title: 'GlorifiedTodos',
    description:
      'Collaborate, manage projects, and reach new productivity peaks.',
    tags: [
      'React',
      'Nextjs',
      'ServerAction',
      'Prisma',
      'mysql',
      'Stripe',
      'Tailwind',
    ],
    imageUrl: glTodos,
    link: 'https://glorified-todos.vercel.app',
  },
  {
    title: 'Chess game',
    description:
      'A chess game built in Next.js, using OOP principles in Typescript.',
    tags: ['Next.js', 'React.js', 'OOP', 'TypeScript', 'Tailwind'],
    imageUrl: chessGame,
    link: 'https://simple-chess-six.vercel.app/',
  },
  {
    title: 'WardrobeWonders',
    description:
      'My final group project in Dev Academy. Your digital wardrobe !',
    tags: ['React', 'PostgreSQL', 'Tailwind', 'Knex.js', 'Express.js'],
    imageUrl: wardrobeWonder,
    link: 'https://wardrobe-wonders.onrender.com',
  },
  {
    title: 'MessengerApp',
    description:
      'A simple realtime messenger app inspired by facebook messenger.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'MongoDB',
      'Pusher',
      'Prisma',
      'Axios',
      'Cloudinary',
      'Auth0',
    ],
    imageUrl: messengerClone,
    link: 'https://messenger-clone-eight-navy.vercel.app',
  },
  {
    title: 'Quillbot',
    description: 'A SaaS app where you can interact with your own PDF file.',
    tags: [
      'React.js',
      'Next.js',
      'mysql',
      'OpenAI',
      'Stripe',
      'Prisma',
      'Pinecone',
      'Langchain',
      'Zod',
      'tRPC',
      'Tailwind',
      'ClerkAuth',
    ],
    imageUrl: quill,
    link: 'https://quill-sooty-zeta.vercel.app',
  },
] as const

export type ProjectProps = (typeof projectsData)[number]

export const skillsData = [
  'Next.js',
  'React',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Golang',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Knex.js',
  'DrizzleORM',
  'MongoDB',
  '@tanstack/react-query',
  'Axios',
  'Express.js',
  'PostgreSQL',
  'mysql',
  'Express.js',
  'Framer Motion',
  'websocket',
  'socket.io',
] as const
