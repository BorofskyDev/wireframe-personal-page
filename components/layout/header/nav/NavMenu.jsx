import { motion } from 'framer-motion'
import ContactButton from '@/components/buttons/ContactButton'
import NavLink from '@/components/links/NavLink'

const NavMenu = () => {
 

  return (
    <nav>
      <motion.div
        className='h-screen bg-zinc-100/90 backdrop-blur-sm absolute md:static border-t py-10 md:py-0 border-zinc-950 top-16 left-0 bottom-0 w-screen md:w-auto flex flex-col md:flex-row text-center md:space-x-8'
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <ul className='h-full flex flex-col bg-zinc-100/90 md:flex-row gap-8 md:gap-0'>
          <NavLink href='/'>Home</NavLink>

          <NavLink href='/about'>About</NavLink>

          <NavLink href='/projects'>Projects</NavLink>

          <NavLink href='/posts'>Blog</NavLink>

          <ContactButton href='#contact' />
        </ul>
      </motion.div>
    </nav>
  )
}
export default NavMenu
