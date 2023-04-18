const Skill = ({ image, description }) => {
  return (
    <div>
      <div className='flex flex-col space-y-2'>
        <div className='flex justify-center'>
          <img
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
