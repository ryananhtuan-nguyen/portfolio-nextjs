'use client'
import { useInView } from 'react-intersection-observer'

import { projectsData } from '@/lib/data'
import Project from './Project'
import SectionHeading from './SectionHeading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect } from 'react'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  const { setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection])

  return (
    <section id="project" ref={ref} className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
