import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'

import Menu from './Menu.js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { links } from '../config/links.js'

import { FaBars, FaSun, FaMoon } from 'react-icons/fa'

const Nav = () => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  const [t, i18n] = useTranslation('global')
  const [language, setLanguage] = useState('ES')

  const { resolvedTheme, setTheme } = useTheme()

  function changeLanguage (language) {
    setLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <div id='nav' className='w-full pt-10 md:pb-10'>
      <a
        className='flex items-center justify-start px-8 font-semibold cursor-pointer md:hidden'
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
      <div className='items-center justify-center hidden p-8 font-semibold md:flex h-14'>
        <div className='flex items-center justify-center gap-x-8'>
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
        <div className='px-2 py-2 pl-10'>
          <div
            className='p-2 rounded-md cursor-pointer ease-linear duration-300 bg-gray-100 dark:bg-[#2c313d]'
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
          >
            {resolvedTheme === 'light' ? <FaMoon /> : <FaSun />}
          </div>
        </div>
        {/*         
        <a
          onClick={() => {
            changeLanguage('ES')
          }}
          className={
            language == 'ES'
              ? 'px-2 py-1 rounded-md cursor-pointer ease-linear duration-300 bg-gray-100 dark:bg-[#2c313d]'
              : 'px-2 py-1 rounded-md cursor-pointer'
          }
        >
          ES
        </a>
        <a
          onClick={() => {
            changeLanguage('EN')
          }}
          className={
            language == 'EN'
              ? 'px-2 py-1 rounded-md cursor-pointer ease-linear duration-300 bg-gray-100 dark:bg-[#2c313d]'
              : 'px-2 py-1 rounded-md cursor-pointer'
          }
        >
          EN
        </a> */}
      </div>
    </div>
  )
}

export default Nav
