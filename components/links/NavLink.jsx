import Link from 'next/link'
import { motion } from 'framer-motion'

const NavLink = ({ children, href }) => {
  const listItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        // ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.li variants={listItemVariants}>
      <Link
        href={href}
        className='text-lg md:text-xl lg:text-2xl text-zinc-900 hover:text-blue-800 font-sans font-semibold hover:font-bold transition duration-200 ease-in-out active:text-blue-950 focus:text-blue-900 '
      >
        {children}
      </Link>
    </motion.li>
  )
}
export default NavLink
