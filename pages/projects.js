import ComplexProject from '../components/complexProject'
import { complexProjects } from '../config/projects'

const Projects = () => {
  return (
    <div id='projects' className='max-w-5xl mx-auto space-y-12'>
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
