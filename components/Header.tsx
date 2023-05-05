import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../public/images/Logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import useIntersectionObservation from '@/lib/observer'

let direction = ''
let prevYposition = 0

// scroll 방향 check function
const checkScrollDirection = (prevY: number) => {
  if (window.scrollY === 0 && prevY === 0) return
  else if (window.scrollY > prevY) direction = 'down'
  else direction = 'up'

  prevYposition = window.scrollY
}

export const Header = () => {
  const [currentId, setCurrentId] = useState('')
  useIntersectionObservation(setCurrentId, currentId)

  return (
    <header className="w-full mobile:h-16 h-12 backdrop-blur-sm bg-white bg-opacity-90 flex-center sticky top-0 text-[16px] z-[51] p-4">
      <nav className="w-full flex justify-between tablet:mx-12 desktop:max-w-[1360px]">
        <div className="h-[19.04px]">
          <Image alt="logo" src={Logo} width={110} height={19.04} />
        </div>
        <div className="space-x-10 items-end justify-start hidden desktop:inline-flex">
          <a
            href="#content1"
            className={`${
              currentId === 'content1' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            프로그램
          </a>
          <a
            href="#content2"
            className={`${
              currentId === 'content2' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            네트워킹
          </a>
          <a
            href="#content3"
            className={`${
              currentId === 'content3' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            명함
          </a>
          <a
            href="#content4"
            className={`${
              currentId === 'content4' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            후원사
          </a>
          <a
            href="#content5"
            className={`${
              currentId === 'content5' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            장소
          </a>
          <a
            href="#content6"
            className={`${
              currentId === 'content6' ? 'font-bold text-[#00DE4F]' : ''
            }`}
          >
            FAQ
          </a>
        </div>
        <MenuIcon className="desktop:hidden tablet:block" />
        <div className="desktop:hidden"></div>
      </nav>
    </header>
  )
}

export default Header
