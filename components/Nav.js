import Link from 'next/link'
import { useRouter } from 'next/router'
import { links } from '../config/links.js'

const Nav = () => {
  const router = useRouter()

  return (
    <div id='nav'>
      <div className='w-full flex justify-center py-10'>
        <div className='flex h-14 justify-center items-center gap-x-10 p-8 font-semibold'>
          {links.map(link => {
            return (
              <Link key={link.name} href={link.href} title='main'>
                <a
                  className={
                    router.route === link.href
                      ? 'bg-gray-100 py-2 px-4 rounded-md cursor-pointer ease-linear duration-300'
                      : ''
                  }
                >
                  {link.name}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav
