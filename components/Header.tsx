import React from 'react'
// import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
  return (
    <header className="w-full mobile:h-16 h-12 backdrop-blur-sm bg-white bg-opacity-90 flex justify-center items-center sticky top-0 text-[16px] z-50 p-4">
      <nav className="w-full max-w-[1360px] flex justify-between">
        <div className="font-extrabold">TEOConf</div>
        <div className="inline-flex space-x-10 items-end justify-start mobile:block hidden">
          <button type="button">프로그램</button>
          <button type="button">네트워킹</button>
          <button type="button">명함</button>
          <button type="button">후원사</button>
          <button type="button">장소</button>
          <button type="button">FAQ</button>
        </div>
        <MenuIcon className="mobile:hidden block" />
      </nav>
    </header>
  )
}

export default Header
