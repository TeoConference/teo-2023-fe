import React from 'react'
import Header from '../components/common/Header'

const Main = () => {
  return (
    <>
      <Header />
      <section className="w-full max-w-[1920px] flex justify-center items-center h-[764px] bg-orange-200">
        TEOCON
      </section>
      <section className="w-full h-[1264px] flex justify-center items-center desktop:bg-rose-950 text-white">
        모두에게 열려있는 컨퍼런스
      </section>
      <section className="w-full h-[800px] flex justify-center items-center desktop:bg-slate-500 text-orange-500">
        프로그램
      </section>
      <section className="w-full h-[1131px] flex justify-center items-center desktop:bg-emerald-400 text-white">
        네트워킹
      </section>
      <section className="w-full h-[1499px] flex justify-center items-center desktop:bg-gray-950 text-white">
        나만의 명함만들기
      </section>
      <section className="w-full h-[630px] flex justify-center items-center desktop:bg-emerald-400 text-white">
        후원사 모집
      </section>
      <section className="w-full h-[1029px] flex justify-center items-center desktop:bg-gray-950 text-white">
        지도
      </section>
      <section className="w-full h-[1738px] flex justify-center items-center desktop:bg-rose-950 text-white">
        안내사항 및 자주 묻는 질문
      </section>
      <section className="w-full h-[888px] flex justify-center items-center desktop:bg-orange-200 text-white">
        스테프 사진
      </section>
      <footer className="w-full h-[310px] flex justify-center items-center desktop:bg-emerald-400 text-white">
        푸터
      </footer>
    </>
  )
}
export default Main
