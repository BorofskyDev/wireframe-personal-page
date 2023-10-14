import Link from 'next/link'

const NavbarButton = ({ href }) => {
  return (
    <Link
      href={href}
      className=' absolute grid place-content-center text-2xl lg:text-4xl h-full w-full font-semibold font-body hover:bg-blue-900 hover:text-zinc-100 transition duration-200 ease-in-out active:bg-blue-950 active:text-zinc-100 active:shadow-none focus:bg-blue-900 focus:text-zinc-100 focus:border-blue-400'
    >
      <span>Contact</span>
    </Link>
  )
}
export default NavbarButton
