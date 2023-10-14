
import NavbarButton from '@/components/buttons/NavbarButton'
import NavLink from '@/components/links/NavLink'

const NavBar = () => {
  return (
    <div className='hidden md:grid grid-cols-12  sticky w-screen h-full  border-b border-zinc-950'>
      
      <nav className=' border-r border-zinc-950 col-span-6'>
        <ul className='flex px-7 py-6 justify-between'>
          <NavLink href='/'>Home</NavLink>

          <NavLink href='/about'>About</NavLink>

          <NavLink href='/projects'>Projects</NavLink>

          <NavLink href='/posts'>Blog</NavLink>
        </ul>
      </nav>
      <div className="col-span-3 grid place-content-center">[THEME TOGGLE]</div>
      <div className='grid place-content-center relative col-span-3 border-l border-zinc-950 bg-slate-300 text-center'>
       <NavbarButton href='#contact' />
      </div>
    </div>
  )
}
export default NavBar
