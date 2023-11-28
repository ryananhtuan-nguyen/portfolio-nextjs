import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import wardrobeWonder from '/wardrobe-wonders.jpg'
import messengerClone from '/messenger-clone.jpg'
import cypress from '/cypress.png'
import quill from '/quill.jpg'
import digitalHippo from '/digitalhippo.jpg'
import aiCompanion from '/ai-companion.jpg'

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

export const experiencesData = [
  {
    title: 'Freelancer, content creator, contractor',
    location: 'New Market, Auckland',
    description:
      'Moving on from the course from Dev Academy, I immersed myself into learning and exploring new Technologies, building and deploying quite a few full-stack projects.',
    icon: React.createElement(LuGraduationCap),
    date: '2023 - Present',
  },
  {
    title: 'Front-End Developer',
    location: 'New Market, Auckland',
    description:
      'I graduated from Level 6 in Applied Software Development course from Dev Academy Aotearoa.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Sous Chef',
    location: 'Mission Bay, Auckland',
    description:
      'Exceptional leadership skills honed through orchestrating kitchen operations and managing teams. Strong ability to delegate tasks efficiently while maintaining a clear vision of culinary goals. Profound teamwork experience in high-pressure kitchen environments, fostering cooperation, communication, and problem-solving. Adaptability, meticulous attention to detail, and a commitment to delivering exceptional results.',
    icon: React.createElement(FaReact),
    date: '2014-2023',
  },
] as const

export const projectsData = [
  {
    title: 'Cypress',
    description:
      'A Saas notion app where you can create and manage your own workspace, folders, and file, as well as collaborate with others with realtime update, realtime cursor, realtime selection, and realtime create/update/delete folder, file, and workspaces.',
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
  },
  {
    title: 'Wardrobe wonders',
    description:
      'A digital wardrobe that helps you manage your own wardrobe and also can share your outfit of the day, as well as like and commenting on other users outfits. This project is our final group project built during the bootcamp in Dev Academy Aotearoa.',
    tags: ['React', 'PostgresSQL', 'Tailwind', 'Knex.js', 'Express.js'],
    imageUrl: wardrobeWonder,
  },
  {
    title: 'Facebook messenger clone',
    description:
      'A simple messenger app inspired by facebook messenger, where user can send messages, photos, and also see the status of the other user all in real-time',
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
  },
  {
    title: 'Quillbot',
    description:
      'A SaaS app that give you the power to upload your own pdf, view it in your own way, and also interact with the pdf file with the help of Open AI',
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
  },
  {
    title: 'DigitalHippo',
    description:
      'A modern digital market place where you can sell or purchase your digital assets, with Admin dashboard provided',
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
  },
] as const

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
