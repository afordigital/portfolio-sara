const Table = ({ title, skill1, skill2, skill3, skill4, skill5 }) => {
  return (
    <div className='border drop-shadow-sm rounded-lg'>
      <div className='divide-y-2'>
        <div className='flex items-center px-6 py-4 text-xl'>
          <p className='font-bold'>{title}</p>
        </div>
        <div className='px-6 py-4 text-lg'>
          <div className='hidden md:flex space-x-10'>
            {skill1}
            {skill2}
            {skill3}
            {skill4}
            {skill5}
          </div>
          <div className='grid grid-cols-2 space-y-4 md:hidden'>
            {skill1}
            {skill2}
            {skill3}
            {skill4}
            {skill5}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
