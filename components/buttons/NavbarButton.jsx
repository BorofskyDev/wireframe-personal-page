import Link from 'next/link'

const NavbarButton = ({ href }) => {
  return (
    <Link
      href={href}
      className='border md:border-none left-0 align-middle border-zinc-950 py-2.5 md:py-0 px-10 md:px-0 md:h-full md:w-full  text-2xl font-semibold font-sans hover:bg-blue-900 hover:text-zinc-100 transition duration-200 ease-in-out active:bg-blue-950 active:text-zinc-100 active:shadow-none  focus:bg-blue-900 focus:text-zinc-100 focus:border-blue-400'
    >
      Contact
    </Link>
  )
}
export default NavbarButton
