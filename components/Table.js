const Table = ({
  title,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  place,
  iconPlace,
  date,
  iconDate,
  description
}) => {
  return (
    <div className='border drop-shadow-sm rounded-lg'>
      <div className='divide-y-2'>
        <div className='flex items-center px-6 py-4 text-xl'>
          <p className='font-bold'>{title}</p>
        </div>
        <div className='px-6 py-4 text-lg'>
          <div className='flex space-x-10'>
            {skill1}
            {skill2}
            {skill3}
            {skill4}
            {skill5}
          </div>
          <div className='flex'>
            {iconPlace}
            <p className='font-semibold pl-2'>{place}</p>
          </div>
          <div className='flex'>
            {iconDate}
            <p className='pl-2'>{date}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Table
