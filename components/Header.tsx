import Image from 'next/image'
import React from 'react'
import Logo from '../public/images/Logo.png'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
  return (
    <header className="w-full mobile:h-16 h-12 backdrop-blur-sm bg-white bg-opacity-90 flex-center sticky top-0 text-[16px] z-50 p-4">
      <nav className="w-full flex justify-between tablet:mx-12 desktop:max-w-[1360px]">
        <div className="h-[19.04px]">
          <Image alt="logo" src={Logo} width={110} height={19.04} />
        </div>
        <div className="space-x-10 items-end justify-start hidden desktop:inline-flex">
          <button type="button">프로그램</button>
          <button type="button">네트워킹</button>
          <button type="button">명함</button>
          <button type="button">후원사</button>
          <button type="button">장소</button>
          <button type="button">FAQ</button>
        </div>
        <MenuIcon className="desktop:hidden tablet:block" />
      </nav>
    </header>
  )
}

export default Header
