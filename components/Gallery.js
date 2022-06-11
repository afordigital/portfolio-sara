import Image from 'next/Image'
import { renders } from '../config/projects'

import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

const Gallery = ({ selectedImage, setSelectedImage }) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center text-2xl z-50'>
      <div className='w-1/2 h-3/4 relative'>
        <Image
          id='image-container'
          src={renders[selectedImage]}
          alt=''
          layout='fill'
          objectFit='contain'
        />
      </div>
      <p
        id='prevButton'
        className='absolute top-1/2 left-0 text-white cursor-pointer'
        onClick={() => {
          if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1)
          }
        }}
      >
        Prev
        <FaLessThan />
      </p>
      <p
        id='nextButton'
        className='absolute top-1/2 right-8 text-white cursor-pointer'
        onClick={() => {
          if (selectedImage < renders.length - 1) {
            setSelectedImage(selectedImage + 1)
          }
        }}
      >
        Sig
        <FaGreaterThan />
      </p>
    </div>
  )
}

export default Gallery
