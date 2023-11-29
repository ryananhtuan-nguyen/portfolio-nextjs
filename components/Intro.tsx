'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const Intro = () => {
  const { ref } = useSectionInView('Home')
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src="/profilePic.jpg"
              alt="Ryan profile pic"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I&apos;m Ryan Nguyen. </span>
        I&apos;m a <span className="font-bold">full-stack developer </span>
        with <span className="font-bold">experiences. </span> I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">
          React.js, Next.js, Express.js, Typescript, databases, ...
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"
          href="Ryan_Resume.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>

        <a
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/ryan-nguyen-902196293/"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          aria-label="Github"
          href="https://github.com/ryananhtuan-nguyen"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
