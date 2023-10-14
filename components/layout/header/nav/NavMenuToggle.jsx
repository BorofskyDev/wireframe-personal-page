const NavMenuToggle = ({ isMenuOpen, setIsMenuOpen}) => {

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
        }


  return (
    <button
      onClick={handleMenuToggle}
      className='flex flex-col items-center justify-between h-6 w-6 md:hidden'
    >
      <span
        className={`block bg-zinc-950 w-4 h-0.5  transition-all duration-300 
        ${isMenuOpen ? 'rotate-45 translate-y-2.5 bg-blue-900' : ''}`}
      ></span>
      <span
        className={`block bg-zinc-950 w-4 h-0.5 transition-opacity duration-300 
        ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
      ></span>
      <span
        className={`block bg-zinc-950 w-4 h-0.5 transition-all duration-300 
        ${isMenuOpen ? '-rotate-45 -translate-y-3 bg-blue-900' : ''}`}
      ></span>
    </button>
  )
}
export default NavMenuToggle