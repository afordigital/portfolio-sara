import Button from '../components/common/button'

import Image from 'next/image'

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
        <div className='flex text-4xl font-bold place-items-center'>
          {icon}
          <h2 className='pl-4'>{title}</h2>
        </div>
        <div className='flex items-center gap-x-8 text-lg'>
          <a className='w-1/3 cursor-pointer' href={hrefbutton}>
            <Image
              src={src}
              alt='Proyecto 1'
              width={320}
              height={270}
              objectFit='contain'
            />
          </a>

          <div className='w-2/3'>
            <p>{description}</p>
            <br />
            <div className='flex items-center space-x-12 w-full'>
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
      <div className='md:hidden p-8 pb-0'>
        <div className='flex text-2xl font-bold'>
          {icon}
          <h2 className='pl-4'>{title}</h2>
        </div>
        <a className='cursor-pointer' href={hrefbutton}>
          <Image
            src={src}
            alt='Proyecto 1'
            width={320}
            height={270}
            objectFit='contain'
          />
        </a>
        <div className='flex items-center gap-x-8 text-lg'>
          <div>
            <p>{description}</p>
            <br />
            <div className='flex items-center space-x-12 w-full'>
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
