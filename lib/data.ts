import aiCompanion from '@/public/ai-companion.png'
import cypress from '@/public/cypress.png'
import digitalHippo from '@/public/digitalhippo.png'
import messengerClone from '@/public/messenger-clone.png'
import quill from '@/public/quill.png'
import wardrobeWonder from '@/public/wardrobe-wonders.png'
import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { LuChefHat, LuGraduationCap } from 'react-icons/lu'

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
    title: 'Freelancer, content creator, contractor',
    location: 'New Market, Auckland',
    description: `Moving on from the course from Dev Academy, I immersed myself into learning and exploring new Technologies, building and deploying quite a few full-stack projects, as well as contributing contents for some of the high-views youtube coding channels. Also currently a moderator of a React/Nextjs community with 10k+ members.`,
    icon: React.createElement(CgWorkAlt),
    date: '09/2023 - Present',
  },
  {
    title: 'Full-stack Developer',
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
      'A Saas notion app with realtime features for you to collaborate with others',
    tags: [
      'React',
      'Next.js',
      'Supabase',
      'Tailwind',
      'DrizzleORM',
      'PostgresSQL',
      'socket.io',
      'QuillEditor',
      'Stripe',
    ],
    imageUrl: cypress,
    link: 'https://notion-clone-production-90f7.up.railway.app',
  },
  {
    title: 'WardrobeWonders',
    description:
      'My final group project in Dev Academy. Your digital wardrobe !',
    tags: ['React', 'PostgresSQL', 'Tailwind', 'Knex.js', 'Express.js'],
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
  {
    title: 'DigitalHippo',
    description:
      'A modern digital market place where you can sell or purchase your digital assets, with Admin dashboard provided.',
    tags: [
      'React.js',
      'Next.js',
      'Express.js',
      'MongoDB',
      'tRPC',
      'Payload',
      'Resend',
      'Swiper',
      'Tailwind',
    ],
    imageUrl: digitalHippo,
    link: 'https://digital-hippo-production.up.railway.app',
  },
  {
    title: 'AI-Companion',
    description:
      'A SaaS app where you can create your own custom AI companion and be able to interact with it.',
    tags: [
      'Next.js',
      'React.js',
      'ClerkAuth',
      'Prisma',
      'mysql',
      'Tailwind',
      'Stripe',
      'Pinecone',
      'OpenAI',
    ],
    imageUrl: aiCompanion,
    link: 'https://github.com/ryananhtuan-nguyen/ai-companion',
  },
] as const

export type ProjectProps = (typeof projectsData)[number]

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Knex.js',
  'DrizzleORM',
  'MongoDB',
  '@tanstack/react-query',
  'Apollo',
  'Express.js',
  'PostgreSQL',
  'mysql',
  'Express.js',
  'Framer Motion',
  'websocket',
  'socket.io',
] as const
