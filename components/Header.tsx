import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import LaunchIcon from '@mui/icons-material/Launch'

import useIntersectionObservation from '@/lib/observer'
import Logo from '../public/images/Logo.png'
import Sidebar from './Sidebar'

export const Header = () => {
  const router = useRouter()
  const [currentId, setCurrentId] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  useIntersectionObservation(setCurrentId, currentId)

  const toggleSide = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="w-full h-12 backdrop-blur-sm bg-white bg-opacity-90 flex-center sticky top-0 text-body2 z-50 p-4">
      <nav className="w-full flex justify-between tablet:mx-12 desktop:max-w-[1360px]">
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
          <a href="https://festa.io/events/3428" target="_blank">
            <LaunchIcon className="text-green-main" />
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
