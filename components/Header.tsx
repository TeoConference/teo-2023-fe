import Image from 'next/image'
import React from 'react'
import Logo from '../public/images/Logo.png'
// import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="w-full h-16 backdrop-blur-sm bg-white bg-opacity-90 flex justify-center items-center sticky top-0 text-[16px] z-50 p-4">
      <nav className="w-full max-w-[1360px] flex justify-between">
        <div>
          <Image alt="logo" src={Logo} width={110} height={19.04} />
        </div>
        <div className="inline-flex space-x-10 items-end justify-start">
          <button type="button">프로그램</button>
          <button type="button">네트워킹</button>
          <button type="button">명함</button>
          <button type="button">후원사</button>
          <button type="button">장소</button>
          <button type="button">FAQ</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
