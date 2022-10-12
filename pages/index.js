import { GoProject } from 'react-icons/go'
import { FaImages } from 'react-icons/fa'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Project from '../components/common/project'
import Render from '../components/common/render'
import Gallery from '../components/Gallery'
import { projects, renders } from '../config/projects'

const Home = () => {
  const [openGallery, setOpenGallery] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const targetIds = ['image-container', 'prevButton', 'nextButton']

  const [t, i18n] = useTranslation('global')

  return (
    <div
      id='home'
      className='max-w-5xl mx-auto p-8 md:p-0'
      onClick={e => {
        if (!targetIds.includes(e.target.id) && openGallery) {
          setOpenGallery(false)
          setSelectedImage(null)
        }
      }}
    >
      {openGallery && (
        <Gallery
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <h1 className='flex justify-center pb-4 md:h-24 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 dark:from-yellow-300 dark:to-emerald-500 text-2xl md:text-6xl font-extrabold'>
        {t('header.hello-world')}
      </h1>
      <div className='flex justify-center text-lg pb-8'>
        <p>{t('header.description')}</p>
      </div>
      <div className='flex pb-12 text-2xl md:text-3xl font-bold place-items-center'>
        <GoProject size={28} />
        <h2 className='pl-4'>{t('main-projects.title')}</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 drop-shadow-sm'>
        {projects.map(project => {
          return (
            <Project key={project.title} description={project.description} />
          )
        })}
      </div>
      <div className='flex pt-12 pb-8 text-2xl md:text-3xl font-bold place-items-center'>
        <FaImages />
        <h2 className='pl-4'>Otros proyectos</h2>
      </div>
      <p className='pl-4 pb-8 text-lg'>
        Te presento mi galería de imágenes CGI realizadas con 3ds Max y V-Ray 5.
        Estos son algunos de los proyectos en los que he trabajado en los
        últimos años de experiencia laboral.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {renders.map((render, index, array) => {
          return (
            <Render
              key={render}
              image={render}
              onClick={() => {
                setOpenGallery(true)
                setSelectedImage(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
