import { renders } from '../config/projects'
import { MdClose } from 'react-icons/md'

const Gallery = ({ selectedImage, setSelectedImage }) => {
  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen text-2xl bg-black bg-opacity-50'>
      <div className='w-1/2 h-3/4'>
        <img
          id='image-container'
          src={renders[selectedImage]}
          alt=''
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div
        id='prevButton'
        className='absolute left-0 text-white cursor-pointer top-1/2'
        onClick={() => {
          if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1)
          }
        }}
      >
        Anterior
      </div>
      <div
        id='nextButton'
        className='absolute text-white cursor-pointer top-1/2 right-8'
        onClick={() => {
          if (selectedImage < renders.length - 1) {
            setSelectedImage(selectedImage + 1)
          }
        }}
      >
        Siguiente
      </div>
      <div
        id='closeButton'
        className='absolute text-white cursor-pointer top-4 right-8'
        onClick={() => setSelectedImage(null)}
      >
        <MdClose size={24} />
      </div>
    </div>
  )
}

export default Gallery
