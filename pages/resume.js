import Image from 'next/image'
import {
  FaCode,
  FaSuitcase,
  FaUniversity,
  FaRegBuilding,
  FaCalendarAlt,
  FaUser
} from 'react-icons/fa'

import Table from '../components/Table'
import { Tables, TablesLabExp } from '../config/projects'

const Resume = () => {
  return (
    <div id='resume' className='max-w-5xl mx-auto'>
      <div className='flex pb-4 text-4xl font-bold'>
        <FaUser />
        <h2 className='pl-4'>Resume</h2>
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
            href={'/CV_Sara.pdf'}
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
        <div className='flex pb-8 text-4xl font-bold'>
          <FaCode />
          <h2 className='pl-4'>Habilidades</h2>
        </div>
        <div className='space-y-10'>
          {Tables.map(table => {
            return (
              <Table
                key={table.title}
                title={table.title}
                skill1={table.skill1}
                skill2={table.skill2}
                skill3={table.skill3}
                skill4={table.skill4}
                skill5={table.skill5}
              />
            )
          })}
        </div>
      </div>
      <div className='my-10'>
        <div className='flex pb-8 text-4xl font-bold'>
          <FaSuitcase />
          <h2 className='pl-4'>Experiencia Laboral</h2>
        </div>
        <div className='space-y-10'>
          {TablesLabExp.map(tableLabExp => {
            return (
              <Table
                key={tableLabExp.title}
                title={tableLabExp.title}
                place={tableLabExp.place}
                iconPlace={tableLabExp.iconPlace}
                date={tableLabExp.date}
                iconDate={tableLabExp.iconDate}
                description={tableLabExp.description}
              />
            )
          })}
        </div>
      </div>
      <div className='my-10'>
        <div className='flex pb-8 text-4xl font-bold'>
          <FaUniversity />
          <h2 className='pl-4'>Educación</h2>
        </div>
        <Table
          title={'Diseño y Desarrollo de Videojuegos'}
          place={'Universitat Jaume I, Castellón'}
          iconPlace={<FaRegBuilding />}
          date={'Septiembre 2016 - Enero 2022'}
          iconDate={<FaCalendarAlt />}
          description={
            'Elegí esta universidad motivada por su amplia enseñanza en programación, matemáticas, algorítmica y bases de datos, entre otros. Ahí pude desarrollar mi interés por combinarlo con disciplinas artísticas para crear experiencias en los jugadores.'
          }
        />
      </div>
    </div>
  )
}

export default Resume
