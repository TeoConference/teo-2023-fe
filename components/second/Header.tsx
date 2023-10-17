import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import LaunchIcon from '@mui/icons-material/Launch'

import useIntersectionObservation from '@/lib/observer'
import Logo from '@/public/images/Logo_2.svg'
import Sidebar from './Sidebar'

export const Header = () => {
  const router = useRouter()
  const [currentId, setCurrentId] = useState('banner')
  const [isOpen, setIsOpen] = useState(false)

  useIntersectionObservation(setCurrentId, currentId)

  const toggleSide = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header
      className={clsx(
        'w-full h-12 tablet:h-14 backdrop-blur-sm bg-opacity-90 flex-center sticky top-0 text-body2 z-50 p-4 transition-all duration-300 bg-black'
      )}
    >
      <nav className="w-full flex justify-between tablet:mx-12 desktop:max-w-[1024px] desktop-xl:max-w-[1360px]">
        <div className="h-[19.04px]">
          <Image
            className="cursor-pointer"
            alt="logo"
            src={Logo}
            width={110}
            height={19.04}
            onClick={() => router.push('/')}
          />
        </div>
        <div className="space-x-10 items-end justify-start hidden desktop:inline-flex">
          <a
            href="#program"
            className={`${
              currentId === 'program'
                ? 'font-bold text-[#A869EE]'
                : 'text-white'
            }`}
          >
            프로그램
          </a>
          <a
            href="#networking"
            className={`${
              currentId === 'networking'
                ? 'font-bold text-[#A869EE]'
                : 'text-white'
            }`}
          >
            네트워킹
          </a>
          <a
            href="#gallery"
            className={`${
              currentId === 'gallery'
                ? 'font-bold text-[#A869EE]'
                : 'text-white'
            }`}
          >
            현장 스케치
          </a>
          <a
            href="#name-card"
            className={`${
              currentId === 'name-card'
                ? 'font-bold text-[#A869EE]'
                : 'text-white'
            }`}
          >
            명함
          </a>
          <a
            href="#sponsor"
            className={`${
              currentId === 'sponsor'
                ? 'font-bold text-[#A869EE]'
                : 'text-white'
            }`}
          >
            후원사
          </a>
          <a
            href="#location"
            className={`${
              currentId === 'location'
                ? 'font-bold text-[#A869EE]'
                : 'text-white'
            }`}
          >
            장소
          </a>
          <a
            href="#faq"
            className={`${
              currentId === 'faq' ? 'font-bold text-[#A869EE]' : 'text-white'
            }`}
          >
            FAQ
          </a>
          <a href="https://www.jumpit.co.kr/contents/428" target="_blank">
            <LaunchIcon className="text-purple-main" />
          </a>
        </div>
        {isOpen ? (
          <CloseIcon
            onClick={toggleSide}
            className="desktop:hidden tablet:block cursor-pointer"
          />
        ) : (
          <MenuIcon
            onClick={toggleSide}
            className="desktop:hidden tablet:block cursor-pointer"
          />
        )}
        <Sidebar currentId={currentId} isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  )
}

export default Header
