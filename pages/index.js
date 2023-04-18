import { GoProject } from 'react-icons/go'
import { PasteClipboard, MediaImageFolder } from 'iconoir-react'
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
      className='max-w-5xl p-8 mx-auto md:p-0'
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
      <h1 className='flex justify-center pb-4 text-2xl font-extrabold text-transparent md:h-24 bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 dark:from-yellow-300 dark:to-emerald-500 md:text-6xl'>
        {t('header.hello-world')}
      </h1>
      <div className='flex justify-center pb-8 text-lg'>
        <p>{t('header.description')}</p>
      </div>
      <div className='flex items-center pb-12 text-2xl font-bold md:text-3xl'>
        <PasteClipboard width={26} strokeWidth={2.3} className='mt-2' />
        <h2 className='pl-4'>{t('main-projects.title')}</h2>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 drop-shadow-sm'>
        {projects.map(project => {
          return (
            <Project key={project.title} description={project.description} />
          )
        })}
      </div>
      <div className='flex pt-12 pb-8 text-2xl font-bold md:text-3xl place-items-center'>
        <MediaImageFolder width={26} strokeWidth='2.2' className='mt-2' />
        <h2 className='pl-4'>Otros proyectos</h2>
      </div>
      <p className='pb-8 pl-4 text-lg'>
        Te presento mi galería de imágenes CGI realizadas con 3ds Max y V-Ray 5.
        Estos son algunos de los proyectos en los que he trabajado en los
        últimos años de experiencia laboral.
      </p>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
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
