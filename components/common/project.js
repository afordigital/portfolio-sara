const Project = ({ title, description }) => {
  return (
    <div className='border drop-shadow-2xl rounded-lg p-6'>
      <div className='flex'>
        <h2 className='font-bold text-2xl pb-4 pr-2'>{title}</h2>
      </div>
      <p className='text-lg'>{description}</p>
    </div>
  )
}

export default Project
