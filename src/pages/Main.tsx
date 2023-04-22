import React from 'react'
import Header from '../components/common/Header'

const Main = () => {
  return (
    <>
      <Header />
      <section className="w-full max-w-[1920px] flex-center flex-col h-[916px] mt-16 bg-orange-200">
        <div className="w-full max-w-[1360px]">
          <div className="font-Pretendard7 text-[5rem]">TEOCONE</div>
          <div className="cutomH1">테오의 컨퍼런스</div>
          <div>23.05.20 토요일, 사람인 카페</div>
        </div>
      </section>
      <section className="w-full h-[1264px] flex-center desktop:bg-rose-950 text-white">
        모두에게 열려있는 컨퍼런스
      </section>
      <section className="w-full h-[800px] flex-center desktop:bg-slate-500 text-orange-500">
        프로그램
      </section>
      <section className="w-full h-[1131px] flex-center desktop:bg-emerald-400 text-white">
        네트워킹
      </section>
      <section className="w-full h-[1499px] flex-center desktop:bg-gray-950 text-white">
        나만의 명함만들기
      </section>
      <section className="w-full h-[630px] flex-center desktop:bg-emerald-400 text-white">
        후원사 모집
      </section>
      <section className="w-full h-[1029px] flex-center desktop:bg-gray-950 text-white">
        지도
      </section>
      <section className="w-full h-[1738px] flex-center desktop:bg-rose-950 text-white">
        안내사항 및 자주 묻는 질문
      </section>
      <section className="w-full h-[888px] flex-center desktop:bg-orange-200 text-white">
        스테프 사진
      </section>
      <footer className="w-full h-[310px] flex-center desktop:bg-emerald-400 text-white">
        푸터
      </footer>
    </>
  )
}
export default Main
