import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../public/images/Logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import useIntersectionObservation from '@/lib/observer'

export const Header = () => {
  const [activeId, setActiveId] = useState('content6')
  useIntersectionObservation(setActiveId)

  return (
    <header className="w-full mobile:h-16 h-12 backdrop-blur-sm bg-white bg-opacity-90 flex-center sticky top-0 text-[16px] z-50 p-4">
      <nav className="w-full flex justify-between tablet:mx-12 desktop:max-w-[1360px]">
        <div className="h-[19.04px]">
          <Image alt="logo" src={Logo} width={110} height={19.04} />
        </div>
        <div className="space-x-10 items-end justify-start hidden desktop:inline-flex">
          <a
            href="#content1"
            className={`${
              activeId === 'content1' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            프로그램
          </a>
          <a
            href="#content2"
            className={`${
              activeId === 'content2' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            네트워킹
          </a>
          <a
            href="#content3"
            className={`${
              activeId === 'content3' ? 'font-bold text-[#00DE4F]' : ''
            }`}
            type="button"
          >
            명함
          </a>
          <a
            href="#content4"
            className={`${
              activeId === 'content4' ? 'font-bold text-[#00DE4F]' : ''
            }`}
            type="button"
          >
            후원사
          </a>
          <a
            href="#content5"
            className={`${
              activeId === 'content5' ? 'font-bold text-[#00DE4F]' : ''
            }`}
            type="button"
          >
            장소
          </a>
          <a
            href="#content6"
            className={`${
              activeId === 'content6' ? 'font-bold text-[#00DE4F]' : ''
            }`}
            type="button"
          >
            FAQ
          </a>
        </div>
        <MenuIcon className="desktop:hidden tablet:block" />
      </nav>
    </header>
  )
}

export default Header
