import Image from 'next/image'
import {
  FaCode,
  FaSuitcase,
  FaUniversity,
  FaRegBuilding,
  FaCalendarAlt
} from 'react-icons/fa'

import Table from '../components/Table'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Skill from '../components/common/skill'

const Resume = () => {
  return (
    <div id='resume' className='max-w-5xl mx-auto'>
      <Nav />
      <div className='flex justify-center pb-10 text-3xl font-bold'>
        <h1>Resume</h1>
      </div>
      <div className='flex items-center pb-10'>
        <div className='flex flex-col w-2/3'>
          <p className='flex items-center pr-8 pb-4 text-xl'>
            Me considero una persona con mucha pasión por lo que hace. Mi
            objetivo en mi carrera profesional es seguir formándome hasta llegar
            al punto de formar mi propia comunidad, hacer divulgación
            tecnológica y ayudar a la gente que está empezando a disfrutar más
            su camino de aprendizaje.
          </p>
          <a
            href='/CV_Sara.pdf'
            download
            className='w-40 text-xl py-1.5 px-3 border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white hover:ease-in transition duration-300'
          >
            Descargar CV
          </a>
        </div>
        <Image
          src='/img-portfolio.jpg'
          alt='Picture of the author'
          width={220}
          height={220}
          objectFit='cover'
          className='rounded-full w-1/3'
        />
      </div>
      <div className='my-10'>
        <h2 className='flex gap-x-4 text-2xl font-semibold mb-8'>
          <FaCode size={26} />
          Habilidades
        </h2>
        <div className='space-y-10'>
          <Table
            title={'Frontend'}
            skill1={
              <Skill image={'/resume-icons/react.svg'} description={'React'} />
            }
            skill2={
              <Skill
                image={'/resume-icons/nextjs.svg'}
                description={'NextJS'}
              />
            }
            skill3={
              <Skill
                image={'/resume-icons/js.svg'}
                description={'JavaScript'}
              />
            }
            skill4={
              <Skill image={'/resume-icons/html.svg'} description={'HTML'} />
            }
            skill5={
              <Skill image={'/resume-icons/css.svg'} description={'CSS'} />
            }
          />
          <Table
            title={'Diseño Gráfico'}
            skill1={
              <Skill image={'/resume-icons/figma.svg'} description={'Figma'} />
            }
            skill2={
              <Skill
                image={'/resume-icons/photoshop.svg'}
                description={'Photoshop'}
              />
            }
            skill3={
              <Skill
                image={'/resume-icons/illustrator.svg'}
                description={'Illustrator'}
              />
            }
            skill4={
              <Skill
                image={'/resume-icons/indesign.svg'}
                description={'InDesign'}
              />
            }
            skill5={
              <Skill
                image={'/resume-icons/after-effects.svg'}
                description={'After Effects'}
              />
            }
          />
          <Table
            title={'Softwares 3D'}
            skill1={
              <Skill
                image={'/resume-icons/3dsmax.svg'}
                description={'3ds Max'}
              />
            }
            skill2={
              <Skill image={'/resume-icons/vray.svg'} description={'V-Ray 5'} />
            }
            skill3={
              <Skill
                image={'/resume-icons/verge.svg'}
                description={'Verge 3D'}
              />
            }
            skill4={
              <Skill
                image={'/resume-icons/blender.svg'}
                description={'Blender'}
              />
            }
          />
          <Table
            title={'Herramientas'}
            skill1={
              <Skill
                image={'/resume-icons/github.svg'}
                description={'Github'}
              />
            }
            skill2={
              <Skill
                image={'/resume-icons/vs-code.svg'}
                description={'VS Code'}
              />
            }
          />
        </div>
      </div>
      <div className='my-10'>
        <h2 className='flex gap-x-4 text-2xl font-semibold mb-8'>
          <FaSuitcase size={26} />
          Experiencia Laboral
        </h2>
        <div className='space-y-10'>
          <Table
            title={'Artista Técnica'}
            place={'Estudio Cactus'}
            iconPlace={<FaRegBuilding />}
            date={'Sept 2021 - Actual'}
            iconDate={<FaCalendarAlt />}
            description={'Trabaje en tal y tal y tal'}
          />
          <Table
            title={'Programadora Web'}
            place={'Mandarina Webs'}
            iconPlace={<FaRegBuilding />}
            date={'Autónoma'}
            iconDate={<FaCalendarAlt />}
            description={'Trabaje en tal y tal y tal'}
          />
          <Table
            title={'Artista de CGI en Nuxot'}
            place={'Nuxot'}
            iconPlace={<FaRegBuilding />}
            date={'Enero 2021 - Junio 2021'}
            iconDate={<FaCalendarAlt />}
            description={'Trabaje en tal y tal y tal'}
          />
        </div>
      </div>
      <div className='my-10'>
        <h2 className='flex gap-x-4 text-2xl font-semibold mb-8'>
          <FaUniversity size={26} />
          Educación
        </h2>
        <Table
          title={'Diseño y Desarrollo de Videojuegos'}
          place={'Universitat Jaume I'}
          iconPlace={<FaRegBuilding />}
          date={'Septiembre 2016 - Enero 2022'}
          iconDate={<FaCalendarAlt />}
          description={'Trabaje en tal y tal y tal'}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Resume
