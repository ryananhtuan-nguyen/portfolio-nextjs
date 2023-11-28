import { projectsData } from '@/lib/data'
import Project from './Project'
import SectionHeading from './SectionHeading'

const Projects = () => {
  return (
    <section>
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
