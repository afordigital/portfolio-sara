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
      <div className='flex pb-12 text-4xl font-bold'>
        {icon}
        <h2 className='pl-4'>{title}</h2>
      </div>
      <div className='flex items-center gap-x-8 text-lg'>
        <div className='w-1/3'>
          <Image
            src={src}
            alt='Proyecto 1'
            width={320}
            height={270}
            objectFit='cover'
          />
        </div>
        <div className='w-2/3'>
          <Button href={hrefbutton} text={'Visitar'} />
          <p className='pt-6'>{description}</p>
          <br />
          <h3 className='font-semibold'>Tecnologías usadas:</h3>
          <p>{softwares}</p>
        </div>
      </div>
    </div>
  )
}

export default ComplexProject
