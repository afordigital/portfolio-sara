const ExpTable = ({
  title,
  place,
  iconPlace,
  date,
  iconDate,
  description,
  labor1,
  labor2,
  labor3,
  showList
}) => {
  return (
    <div className='border rounded-lg drop-shadow-sm'>
      <div className='divide-y-2'>
        <div className='flex items-center px-6 py-4 text-xl'>
          <p className='font-bold'>{title}</p>
          {title == 'Charla en' && (
            <div className='pl-4'>
              <img
                src='/women-in-games.svg'
                alt='svg image'
                width={100}
                height={35}
                objectFit='contain'
              />
            </div>
          )}
        </div>
        <div className='px-6 py-4 text-lg'>
          <div className='flex place-items-center'>
            {iconPlace}
            <p className='pl-2 font-semibold'>{place}</p>
          </div>
          <div className='flex place-items-center'>
            {iconDate}
            <p className='pl-2'>{date}</p>
          </div>
          <p>{description}</p>
          {showList && (
            <ui>
              <li>{labor1}</li>
              <li>{labor2}</li>
              <li>{labor3}</li>
            </ui>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExpTable
