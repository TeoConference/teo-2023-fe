import React from 'react'
// import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="w-full h-16 bg-white flex justify-center items-center sticky top-0 text-[16px] z-50">
      <nav className="w-full max-w-[1360px] flex  justify-between">
        <div className="font-extrabold">TEOConf</div>
        <div className="inline-flex space-x-10 items-end justify-start">
          <div>프로그램</div>
          <div>네트워킹</div>
          <div>명함</div>
          <div>후원사</div>
          <div>장소</div>
          <div>FAQ</div>
        </div>
      </nav>
    </header>
  )
}

export default Header
