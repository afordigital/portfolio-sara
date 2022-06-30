import { useTheme } from 'next-themes'
import Menu from './Menu.js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { links } from '../config/links.js'

import { FaBars, FaSun, FaMoon } from 'react-icons/fa'

const Nav = () => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)

  const { theme, setTheme } = useTheme()

  return (
    <div id='nav' className='w-full pt-10 md:pb-10'>
      <a
        className='md:hidden px-8 font-semibold flex items-center justify-start cursor-pointer'
        onClick={() => {
          if (!openMenu) {
            setOpenMenu(true)
          } else {
            setOpenMenu(false)
          }
        }}
      >
        <FaBars size={26} />
        {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
      </a>
      <div className='hidden md:flex justify-center items-center p-8 h-14 font-semibold'>
        <div className='flex justify-center items-center gap-x-8'>
          {links.map(link => {
            return (
              <Link key={link.name} href={link.href} title='main'>
                <a
                  className={
                    router.route === link.href
                      ? 'bg-gray-100 dark:bg-[#2c313d] py-2 px-4 rounded-md cursor-pointer ease-linear duration-300'
                      : 'px-4 hover:bg-gray-100 dark:hover:bg-[#2c313d] py-2 rounded-md'
                  }
                >
                  {link.name}
                </a>
              </Link>
            )
          })}
        </div>
        <div className='pl-10 py-2 px-2 '>
          <div
            className='p-2 rounded-md cursor-pointer ease-linear duration-300 bg-gray-100 dark:bg-[#2c313d]'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
