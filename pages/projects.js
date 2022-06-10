import ComplexProject from '../components/complexProject'
import { complexProjects } from '../config/projects'

const Projects = () => {
  return (
    <div id='projects' className='max-w-5xl mx-auto'>
      {complexProjects.map(cproject => {
        return (
          <ComplexProject
            key={cproject.title}
            icon={cproject.icon}
            title={cproject.title}
            src={cproject.src}
            description={cproject.description}
            softwares={cproject.softwares}
            hrefbutton={cproject.hrefbutton}
          ></ComplexProject>
        )
      })}
    </div>
  )
}

export default Projects
