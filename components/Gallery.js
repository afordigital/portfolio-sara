import Image from 'next/Image'
import { renders } from '../config/projects'

const Gallery = ({ selectedImage }) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='w-1/2 h-3/4 relative'>
        <Image
          id='image-container'
          src={renders[selectedImage]}
          alt=''
          layout='fill'
          objectFit='cover'
        />
      </div>
      <p
        id='prevButton'
        className='absolute top-0 left-0 text-white'
        onClick={() => {
          if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1)
          }
        }}
      >
        Previous
      </p>
      <p
        id='nextButton'
        className='absolute top-0 right-8 text-white'
        onClick={() => {
          if (selectedImage < renders.length - 1) {
            setSelectedImage(selectedImage + 1)
          }
        }}
      >
        Next
      </p>
    </div>
  )
}

export default Gallery
