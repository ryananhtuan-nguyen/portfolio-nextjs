'use client'

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import Project from './Project'
import SectionHeading from './SectionHeading'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.15)

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
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
