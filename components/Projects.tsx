'use client'

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import Project from './Project'
import SectionHeading from './SectionHeading'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.15)

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        <p className="text-center break-words">
          Keen to see more projects? All my github repos are
          <span className="font-semibold"> visible to public</span> !
        </p>
      </div>
    </section>
  )
}

export default Projects
