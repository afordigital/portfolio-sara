import { FaGithub, FaArtstation, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer' className='max-w-5xl pb-8 mx-auto md:pt-16'>
      <div className='flex justify-center text-lg font-semibold md:text-xl'>
        <h1>Sara Montagud - Portfolio</h1>
        <div className='flex pl-3 space-x-3'>
          <a href='https://github.com/Aforina' className='cursor-pointer'>
            <FaGithub size={30} className />
          </a>
          <a
            href='https://www.artstation.com/saramontagud'
            className='cursor-pointer'
          >
            <FaArtstation size={30} />
          </a>
          <a
            href='https://www.linkedin.com/in/sara-montagud-rodr%C3%ADguez/'
            className='cursor-pointer'
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
