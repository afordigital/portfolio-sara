import Image from 'next/image'

const Render = ({ image, onClick }) => {
  return (
    <div className='drop-shadow-lg rounded-lg h-full' onClick={onClick}>
      <div className='w-full h-full flex'>
        <Image
          src={image}
          alt='Picture of the author'
          width={500}
          height={302}
          className='rounded-lg'
        />
        <div
          className='absolute top-0 left-0 w-full h-full flex z-50 bg-black opacity-0
          overflow-hidden
          hover:opacity-40 transition duration-300 rounded-xl'
        >
          <p className='w-full h-full text-white flex justify-center items-center text-2xl font-semibold cursor-pointer'>
            Ver
          </p>
        </div>
      </div>
    </div>
  )
}

export default Render
