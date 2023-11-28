'use client'
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 ">
        I&apos;m Ryan Nguyen, a passionate{' '}
        <span className="font-medium">full-stack developer </span>who thrived in
        a<span className="font-medium">rigorous 15 -week bootcamp</span> at{' '}
        <span className="text-italic">Dev Academy</span>. With a background as a
        Sous Chef, I bring leadership, teamwork, and attention to detail to my
        new career.
      </p>
      <p>
        My core stack is{' '}
        <span className="font-medium">
          React.js, Next.js, Node.js, MongoDB and Mysql.
        </span>
        I am also familiar with{' '}
        <span className="font-medium text-italic">
          TypeScript, Prisma, Drizzle ORM, Socket.io, TailwindCSS and Express.js
          and much more.
        </span>
        I enjoy learning new things, watching movies, playing guitar and coding
        in my free time.
      </p>
    </motion.section>
  )
}

export default About
