'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 ">
        I&apos;m Ryan Nguyen, a passionate{' '}
        <span className="font-medium">full-stack developer </span>who thrived in
        a<span className="font-medium">rigorous 15 -week bootcamp</span> at{' '}
        <span className="text-italic">Dev Academy</span>.
      </p>
      <p className="mb-3 ">
        With a background of{' '}
        <span className="font-medium">almost a decade</span> as a Sous Chef, I
        have equipped myself with:
        <ul className="!list-disc pl-2 sm:pl-12">
          <li>Exceptional leadership skills</li>
          <li>Strong ability to delegate tasks efficiently</li>
          <li>
            Profound teamwork experience in high-pressured environments,
            fostering cooperation, communication and problem-solving
          </li>
          <li>Adaptability, meticulous attention to details</li>
          <li>Commitment to delevering exceptional results.</li>
        </ul>
      </p>
      <p className="mb-3 ">
        My core stack is{' '}
        <span className="font-medium">
          React.js, TypeScript,Next.js, Node.js, MongoDB and Mysql.
        </span>{' '}
        I am also familiar with{' '}
        <span className="font-medium text-italic">
          Prisma, Drizzle ORM, Socket.io, TailwindCSS Express.js, and I&apos;m
          learning more and more everyday.
        </span>{' '}
      </p>
      <p>
        I enjoy exploring new things, watching movies, playing guitar and coding
        in my free time.
      </p>
    </motion.section>
  )
}

export default About
