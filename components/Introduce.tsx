import React from 'react'

import SwiperSlide from '@/components/introduce/SwiperSlide'

const Introduce = () => {
  return (
    <section className="flex-col w-full flex-center py-[180px] tablet:px-32 px-8">
      <div className="flex flex-col space-y-12 items-center justify-start">
        <div className="flex flex-col space-y-6 items-center justify-start">
          <p className="tablet:text-5xl text-3xl font-bold leading-10 text-center">
            모두에게 열려있는 컨퍼런스
          </p>
          <p className="tablet:text-2xl text-xl font-bold text-center text-gray-900">
            “누구나 부담없이 함께 즐겨요!”
          </p>
        </div>
        <p className="tablet:text-xl p-16 tablet:leading-9 leading-7 text-center text-gray-900 text-md">
          테오의 컨퍼런스는{' '}
          <strong className="bg-green-300 rounded-lg">
            &quot;모두에게 열려있는 컨퍼런스&quot;
          </strong>{' '}
          라는 컨셉을 목표로{' '}
          <strong>서로가 갖고 있는 다양한 경험과 지식을 공유</strong>하고
          <strong> 개발자들간에 소통하는 시간</strong>을 만들기 위해
          기획되었어요!
        </p>
      </div>
      <div className="bg-gray-100 rounded-3xl mt-[76px] max-w-[1360px] w-full h-[630px]">
        <div className="overflow-hidden">
          <p className="m-auto w-full tablet:text-4xl text-2xl mt-16 font-bold leading-10 text-center">
            언제나 궁금했던 이야기들
          </p>
          <div className="mt-12 flex">
            <SwiperSlide />
            <SwiperSlide />
            <SwiperSlide />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce
