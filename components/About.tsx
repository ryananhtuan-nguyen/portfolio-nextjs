import React from 'react'
import SectionHeading from './SectionHeading'

const About = () => {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
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
    </section>
  )
}

export default About
