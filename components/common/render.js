import Image from 'next/image'

const Render = ({ title, image, onClick }) => {
  return (
    <div className=' drop-shadow-lg rounded-lg m-1' onClick={onClick}>
      <div>
        <Image
          src={image}
          alt='Picture of the author'
          width={500}
          height={302}
          className='rounded-lg'
        />
        <div
          className='absolute
          top-0
          left-0
          w-full
          h-full
          z-50
          bg-black
          opacity-0
          hover:opacity-40 transition duration-300'
        >
          <p className='w-full h-full text-white flex justify-center items-center text-2xl font-semibold cursor-pointer'>
            Render
          </p>
        </div>
      </div>
    </div>
  )
}

export default Render
