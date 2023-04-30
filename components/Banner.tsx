import Image from 'next/image'
import React from 'react'
import TeoBI from '../public/images/TeoBI.png'

const Banner = () => {
  return (
    <section className="bg-black text-white h-[calc(100vh_-_3rem)] mobile:h-[calc(100vh_-_4rem)] flex-center">
      <div className="desktop:w-[1360px] flex flex-col h-full justify-end desktop:pb-40">
        <Image
          className="mt-36 ml-auto"
          alt="TeoBI"
          src={TeoBI}
          width={461.36}
          height={281}
        />
        <h1 className="font-Pretendard6 mt-auto text-6xl tablet:text-7xl font-bold mb-7">
          TEOConf 2023
        </h1>
        <div className="font-Pretendard6 text-xl tablet:text-5xl flex flex-col mt-10">
          <span>테오의 컨퍼런스</span>
          <span>23.05.20 토요일, 사람인 카페</span>
        </div>
      </div>
    </section>
  )
}

export default Banner
