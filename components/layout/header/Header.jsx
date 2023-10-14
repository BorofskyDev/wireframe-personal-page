'use client'

import { useState } from 'react'
import Banner from './banner/Banner'
import NavMenu from './nav/NavMenu'
import NavMenuToggle from './nav/NavMenuToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='border-b border-zinc-950 inline-grid grid-cols-6 w-screen'>
      <Banner />
      <div className='bg-blue-300 grid place-content-center'>
        {isMenuOpen && <NavMenu />}
        <NavMenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  )
}
export default Header
