import { GoProject } from 'react-icons/go'
import { FaImages } from 'react-icons/fa'

import Project from '../components/common/project'
import Render from '../components/common/render'

const Main = () => {
  return (
    <div id='main' className='max-w-5xl mx-auto'>
      <div className='flex justify-center pb-4'>
        <h1 className='h-24 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 text-6xl font-extrabold'>
          Hola, soy Sara Montagud
        </h1>
      </div>
      <div className='flex justify-center text-xl pb-14'>
        <p>
          Welcome to my personal website. Here you can find a lot about me, like
          my interests, blog posts about things I learn about technology, my
          personal education and work until now and some info about my activity
          on the internet.
        </p>
      </div>
      <div className='flex pb-12 text-4xl font-bold'>
        <GoProject />
        <h2 className='pl-4'>Proyectos principales</h2>
      </div>
      <div className='grid grid-cols-2 gap-8'>
        <Project
          title={'Calculadora Solar'}
          description={
            'Calculadora Solar hecha con JavaScript, HTML, CSS e introducción a php para calcular los datos de compra del usuario.'
          }
        />
        <Project
          title={'Posicionamiento Web 24'}
          description={
            'Página estática realizada con React, NextJS y Tailwindcss con tarifas para vender posicionamiento web, diseño original con Figma.'
          }
        />
        <Project
          title={'Alessio Muganni'}
          description={
            'Portfolio de músico reconocido realizado con React, NextJS y Tailwindcss, diseño original con Figma.'
          }
        />
        <Project
          title={'Puerto de Nueva Jersey'}
          description={
            'Interfaz básica de una aplicación 3D para la seguridad portuaria. Realizado con JavaScript, Verge3D, HTML y CSS.'
          }
        />
      </div>
      <div className='flex pt-12 pb-8 text-4xl font-bold'>
        <FaImages />
        <h2 className='pl-4'>Otros proyectos</h2>
      </div>
      <p className='pl-4 pb-8 text-xl'>
        Infografías 3D realizadas con 3ds Max y V-Ray
      </p>
      <div className='grid grid-cols-2 gap-8'>
        <Render image={'/preview-1.jpg'} />
        <Render image={'/preview-2.jpg'} />
        <Render image={'/preview-3.jpg'} />
        <Render image={'/preview-4.jpg'} />
      </div>
    </div>
  )
}

export default Main
