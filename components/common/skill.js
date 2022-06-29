import Image from 'next/image'

const Skill = ({ image, description, imageSize }) => {
  return (
    <div>
      <div className='flex flex-col space-y-2'>
        <div className='flex justify-center'>
          <Image
            src={image}
            alt='skill icon'
            width={60}
            height={60}
            objectFit='contain'
          />
        </div>
        <p className='flex justify-center'>{description}</p>
      </div>
    </div>
  )
}

export default Skill
