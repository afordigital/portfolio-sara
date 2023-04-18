const Render = ({ image, onClick }) => {
  return (
    <div className='h-full rounded-lg drop-shadow-lg' onClick={onClick}>
      <div className='flex w-full h-full'>
        <img
          src={image}
          alt='Picture of the author'
          width={500}
          height={302}
          className='rounded-lg'
        />
        <div className='absolute top-0 left-0 z-50 flex w-full h-full overflow-hidden transition duration-300 bg-black opacity-0 hover:opacity-40 rounded-xl'>
          <p className='flex items-center justify-center w-full h-full text-2xl font-semibold text-white cursor-pointer'>
            Ver
          </p>
        </div>
      </div>
    </div>
  )
}

export default Render
