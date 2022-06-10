import { GoProject } from 'react-icons/go'
import { FaImages } from 'react-icons/fa'
import { useState } from 'react'

import Project from './common/project'
import Render from './common/render'
import Gallery from './Gallery'
import { projects, renders } from '../config/projects'

const Main = () => {
  const [openGallery, setOpenGallery] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const targetIds = ['image-container', 'prevButton', 'nextButton']

  return (
    <div
      id='main'
      className='max-w-5xl mx-auto'
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
        {projects.map(project => {
          return (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
            />
          )
        })}
      </div>
      <div className='flex pt-12 pb-8 text-4xl font-bold'>
        <FaImages />
        <h2 className='pl-4'>Otros proyectos</h2>
      </div>
      <p className='pl-4 pb-8 text-xl'>
        Infografías 3D realizadas con 3ds Max y V-Ray
      </p>
      <div className='grid grid-cols-2 gap-8'>
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

export default Main
