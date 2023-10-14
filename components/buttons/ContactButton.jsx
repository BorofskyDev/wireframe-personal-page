import Link from 'next/link'
import { motion } from 'framer-motion'

const ContactButton = ({ href }) => {
  const contactButtonVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
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
    <motion.div className='mx-auto' variants={contactButtonVariants}>
      <Link
        href={href}
        className='border border-zinc-950 py-2.5 px-10 text-2xl font-semibold font-sans hover:bg-blue-900 hover:text-zinc-100 transition duration-200 ease-in-out active:bg-blue-950 active:text-zinc-100 active:shadow-none active:translate-y-0 focus:bg-blue-900 focus:text-zinc-100 focus:border-blue-400 shadow-sm hover:shadow-lg hover:-translate-y-1'
      >
        Contact
      </Link>
    </motion.div>
  )
}
export default ContactButton
