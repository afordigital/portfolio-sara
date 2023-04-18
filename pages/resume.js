import {
  ProfileCircle,
  LargeSuitcase,
  Trophy,
  GraduationCap,
  Calendar,
  City
} from 'iconoir-react'

import ExpTable from '../components/ExpTable'
import { TablesLabExp } from '../config/projects'

const Resume = () => {
  return (
    <div id='resume' className='max-w-5xl mx-auto'>
      <div className='flex px-8 pt-8 pb-4 text-2xl font-bold md:text-3xl md:p-0 md:pt-0 place-items-center'>
        <ProfileCircle width={28} strokeWidth={2.3} className='mt-1' />
        <h2 className='pl-2 md:pl-4'>Resume</h2>
      </div>
      {/* PC */}
      <div className='items-center hidden pb-10 md:flex'>
        <div className='flex flex-col'>
          <p className='flex items-center pb-4 pr-8 text-lg'>
            Me considero una persona con mucha pasión por lo que hace. Mi
            objetivo en mi carrera profesional es seguir formándome hasta llegar
            al punto de formar mi propia comunidad, hacer divulgación
            tecnológica y ayudar a la gente que está empezando a disfrutar más
            su camino de aprendizaje.
          </p>
          <a
            href={'/CV_Sara.pdf'}
            download
            className='flex items-center justify-center w-40 py-1 text-xl font-medium transition duration-300 border-2 border-black rounded-lg dark:border-gray-200 hover:bg-black hover:text-white hover:ease-in'
          >
            Descargar CV
          </a>
        </div>
        <img
          src='/img-portfolio.jpg'
          alt='Picture of the author'
          style={{ width: '700px', height: '230px', objectFit: 'cover' }}
          className='rounded-full'
        />
      </div>
      {/* Mobile */}
      <div className='flex items-center p-8 md:hidden'>
        <div className='flex flex-col'>
          <img
            src='/img-portfolio.jpg'
            alt='Picture of the author'
            width={300}
            height={300}
            objectFit='cover'
            className='rounded-full'
          />
          <p className='flex items-center pt-6 pb-4 text-lg'>
            Me considero una persona con mucha pasión por lo que hace. Mi
            objetivo en mi carrera profesional es seguir formándome hasta llegar
            al punto de formar mi propia comunidad, hacer divulgación
            tecnológica y ayudar a la gente que está empezando a disfrutar más
            su camino de aprendizaje.
          </p>
          <a
            href={'/CV_Sara.pdf'}
            download
            className='w-40 text-xl py-1.5 px-3 border-2 border-black dark:border-gray-200 rounded-lg font-medium hover:bg-black hover:text-white hover:ease-in transition duration-300'
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className='my-10'>
        <div className='flex px-8 pb-8 text-2xl font-bold md:text-3xl md:px-0 place-items-center'>
          <LargeSuitcase width={26} strokeWidth={2.3} className='mt-2' />
          <h2 className='pl-2 md:pl-4'>Experiencia Laboral</h2>
        </div>
        <div className='space-y-10'>
          {TablesLabExp.map(tableLabExp => {
            return (
              <ExpTable
                key={tableLabExp.title}
                title={tableLabExp.title}
                place={tableLabExp.place}
                iconPlace={tableLabExp.iconPlace}
                date={tableLabExp.date}
                iconDate={tableLabExp.iconDate}
                description={tableLabExp.description}
                labor1={tableLabExp.labor1}
                labor2={tableLabExp.labor2}
                labor3={tableLabExp.labor3}
                showList={tableLabExp.showList}
              />
            )
          })}
        </div>
      </div>

      <div className='my-10'>
        <div className='flex px-8 pb-8 text-2xl font-bold md:text-3xl md:px-0 place-items-center'>
          <Trophy width={28} strokeWidth={2.1} className='mt-2' />
          <h2 className='pl-2 md:pl-4'>Logros</h2>
        </div>

        <ExpTable
          title={'Ponencia en Hola Mundo Day'}
          date={'Mayo 2023'}
          iconDate={<Calendar width={20} strokeWidth='2' className='mt-1' />}
          description={
            'Gracias a la inciativa del creador de contenido MoureDev tuve la oportunidad de dar una charla "Abrazando al fracaso" con el fin de ayudar a la gente a cambiar su percepción del fracaso y acogerlo como un motor para mejorar.'
          }
          showList={false}
        />
        <br />
        <ExpTable
          title={'Entrevista para Garaje de Ideas'}
          date={'Abril 2023'}
          iconDate={<Calendar width={20} strokeWidth='2' className='mt-1' />}
          description={
            'Entrevista sobre mi experiencia con el síndrome de la impostora, la creación de una comunidad de programación y la simbiosis entre junior y senior para ayudar a mejorar las soft skills de la comunidad.'
          }
          showList={false}
        />
        <br />
        <ExpTable
          title={'Hackaton en comunidad'}
          date={'Febrero de 2023'}
          iconDate={<Calendar width={20} strokeWidth='2' className='mt-1' />}
          description={
            'Organización de un evento en mi canal de twitch donde participaron 17 equipos de la comunidad de programación para desarrollar una aplicación web. Contamos como jurado con el apoyo de una ingeniera informática Luisina de Paula especializada en backend.'
          }
          showList={false}
        />
        <br />
        <ExpTable
          title={'Charla en'}
          date={'Abril 2020'}
          iconDate={<Calendar width={20} strokeWidth='2' className='mt-1' />}
          description={
            'Charla en la plataforma de streaming Twitch para concienciar al público sobre las barreras de ser mujer en el sector tecnológico. Respaldado por la empresa del sector de los videojuegos Women in Games.'
          }
          showList={false}
        />
      </div>

      <div className='my-10'>
        <div className='flex px-8 pb-8 text-2xl font-bold md:text-3xl md:px-0 place-items-center'>
          <GraduationCap width={28} strokeWidth={2.1} className='mt-2' />
          <h2 className='pl-2 md:pl-4'>Educación</h2>
        </div>
        <ExpTable
          title={'Diseño y Desarrollo de Videojuegos'}
          place={'Universitat Jaume I, Castellón'}
          iconPlace={<City width={22} strokeWidth='1.6' />}
          date={'Septiembre 2016 - Enero 2022'}
          iconDate={<Calendar width={20} strokeWidth='2' className='mt-1' />}
          description={
            'Elegí esta universidad motivada por su amplia enseñanza en programación, matemáticas, algorítmica y bases de datos, entre otros. Ahí pude desarrollar mi interés por combinarlo con disciplinas artísticas para crear experiencias para los jugadores.'
          }
          showList={false}
        />
      </div>
    </div>
  )
}

export default Resume
