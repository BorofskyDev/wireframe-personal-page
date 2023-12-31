'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Banner from './banner/Banner'
import NavMenu from './nav/NavMenu'
import NavMenuToggle from './nav/NavMenuToggle'
import NavBar from './nav/NavBar'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 bg-zinc-100 border-b md:border-none border-zinc-950 inline-grid grid-cols-6 w-screen md:flex md:flex-col'>
      <Banner />
      <div className='grid place-content-center'>
      <NavBar />
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
