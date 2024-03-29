import ComplexProject from '../components/complexProject'
import { complexProjects } from '../config/projects'

const Projects = () => {
  return (
    <div
      id='projects'
      className='max-w-5xl mx-auto space-y-1 md:space-y-2 pb-6 md:pb-0'
    >
      {complexProjects.map(complexProject => {
        return (
          <ComplexProject
            key={complexProject.title}
            icon={complexProject.icon}
            title={complexProject.title}
            src={complexProject.src}
            description={complexProject.description}
            softwares={complexProject.softwares}
            hrefbutton={complexProject.hrefbutton}
          ></ComplexProject>
        )
      })}
    </div>
  )
}

export default Projects
