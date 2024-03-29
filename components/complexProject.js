import Button from '../components/common/button'

const ComplexProject = ({
  icon,
  title,
  src,
  description,
  softwares,
  hrefbutton
}) => {
  return (
    <div>
      <div className='hidden md:block'>
        <div className='flex text-3xl font-bold place-items-center'>
          {icon}
          <h2 className='pl-4'>{title}</h2>
        </div>
        <div className='flex items-center text-lg gap-x-8'>
          <a className='w-1/3 cursor-pointer' href={hrefbutton}>
            <img
              src={src}
              alt='Proyecto 1'
              width={320}
              height={270}
              objectFit='contain'
              className='py-8'
            />
          </a>

          <div className='w-2/3'>
            <p>{description}</p>
            <br />
            <div className='flex items-center w-full space-x-12'>
              <div className='w-full'>
                <h3 className='font-semibold'>Tecnologías usadas:</h3>
                <div className='flex space-x-12'>
                  <p>{softwares}</p>
                </div>
              </div>
              <div className='mt-2'>
                <Button href={hrefbutton} text={'Visitar'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='p-8 pb-0 md:hidden'>
        <div className='flex text-2xl font-bold'>
          {icon}
          <h2 className='pl-4'>{title}</h2>
        </div>
        <a className='cursor-pointer' href={hrefbutton}>
          <img
            src={src}
            alt='Proyecto 1'
            width={320}
            height={270}
            objectFit='contain'
          />
        </a>
        <div className='flex items-center text-lg gap-x-8'>
          <div>
            <p>{description}</p>
            <br />
            <div className='flex items-center w-full space-x-12'>
              <div className='w-full'>
                <h3 className='font-semibold'>Tecnologías usadas:</h3>
                <div className='flex space-x-12'>
                  <p>{softwares}</p>
                </div>
              </div>
              <div className='mt-2'>
                <Button href={hrefbutton} text={'Visitar'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplexProject
