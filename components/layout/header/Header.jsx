'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Banner from './banner/Banner'
import NavMenu from './nav/NavMenu'
import NavMenuToggle from './nav/NavMenuToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='border-b border-zinc-950 inline-grid grid-cols-6 w-screen'>
      <Banner />
      <div className='grid place-content-center'>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial='hidden' animate='visible' exit='exit'>
              <NavMenu />{' '}
            </motion.div>
          )}
        </AnimatePresence>
        <NavMenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  )
}
export default Header
