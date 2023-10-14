const NavMenuToggle = ({ isMenuOpen, setIsMenuOpen}) => {

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
        }


  return (
    <button onClick={handleMenuToggle}>
    <span>aedfasdf</span>
    <span></span>
    </button>
  )
}
export default NavMenuToggle