const Button = ({ href, text }) => {
  return (
    <a
      // onClick={() => {
      //   window.open({ href })
      // }}
      href={href}
      className='w-40 text-xl py-1.5 px-3 border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white hover:ease-in transition duration-300'
    >
      {text}
    </a>
  )
}

export default Button
