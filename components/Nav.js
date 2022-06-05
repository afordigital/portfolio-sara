import Link from 'next/link'

const Nav = () => {
  return (
    <div id='nav'>
      <div className='w-full flex justify-center py-10'>
        <div className='flex h-14 justify-center items-center gap-x-10 p-8 font-semibold'>
          <Link href='/' title='main'>
            <a className='bg-gray-100 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-200 ease-linear duration-300'>
              Inicio
            </a>
          </Link>
          <Link href='/projects' title='projects' className='cursor-pointer'>
            <a>Proyectos</a>
          </Link>
          <Link href='/resume' title='resume' className='cursor-pointer'>
            <a>Resume</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
