import { motion } from 'framer-motion'
import ContactButton from '@/components/buttons/ContactButton'
import NavLink from '@/components/links/NavLink'

const NavMenu = () => {
 

  return (
    <nav>
      <motion.div
        className='absolute border-t py-10 border-zinc-950 top-16 left-0 bottom-0  w-screen flex flex-col text-center '
        initial='hidden'
        animate='visible'
      >
        <ul className='flex flex-col gap-8'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <li>
            <NavLink href='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink href='/posts'>Blog</NavLink>
          </li>

          <ContactButton href='#contact' />
        </ul>
      </motion.div>
    </nav>
  )
}
export default NavMenu
