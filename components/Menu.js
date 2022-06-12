import Link from 'next/link'
import { useRouter } from 'next/router'
import { links } from '../config/links'

import { FaTimes, FaToggleOff } from 'react-icons/fa'

const Menu = ({ openMenu, setOpenMenu }) => {
  const router = useRouter()
  return (
    <div className='absolute top-0 left-0 h-screen w-72 bg-gray-100 z-20 text-xl'>
      <div
        onClick={() => {
          setOpenMenu(false)
        }}
        className='flex justify-end p-6'
      >
        <FaTimes />
      </div>
      <div className='flex flex-col justify-center items-center gap-y-6'>
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
  )
}

export default Menu
