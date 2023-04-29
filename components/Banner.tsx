import React from 'react'

const Banner = () => {
  return (
    <section className="bg-black text-white h-[calc(100vh_-_3rem)] mobile:h-[calc(100vh_-_4rem)] flex-center">
      <div className="desktop:w-[1360px] flex flex-col h-full justify-end desktop:pb-40">
        <h1 className="text-6xl tablet:text-7xl font-bold">TEOConf 2023</h1>
        <div className="text-xl tablet:text-3xl flex flex-col mt-10">
          <span>테오의 컨퍼런스</span>
          <span>23.05.20 토요일, 사람인 카페</span>
        </div>
      </div>
    </section>
  )
}

export default Banner