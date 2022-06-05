import Image from 'next/image'

const Render = ({ title, image }) => {
  return (
    <div className='border drop-shadow-lg rounded-lg p-6'>
      <Image src={image} alt='Picture of the author' width={500} height={302} />
    </div>
  )
}

export default Render
