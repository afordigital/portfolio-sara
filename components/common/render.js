import Image from 'next/image'

const Render = ({ title, image, onClick }) => {
  return (
    <div className='border drop-shadow-lg rounded-lg p-6' onClick={onClick}>
      <Image
        src={image}
        alt='Picture of the author'
        width={500}
        height={302}
        className='image'
      />
    </div>
  )
}

export default Render
