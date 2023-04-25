import React from 'react'

const Sponsor = () => (
  <section className="flex flex-col items-center justify-center px-2.5 py-[120px] bg-gray-100">
    <div className="flex flex-col space-y-9 items-center justify-start">
      <div className="flex flex-col space-y-12 items-center justify-start">
        <div className="flex flex-col space-y-4 items-center justify-start">
          <p className="text-5xl font-bold leading-10 text-center">
            후원사 소개
          </p>
          <p className="text-2xl font-bold leading-10 text-center">
            테오의 컨퍼런스 1기는 사림인의 &apos;점핏&apos;에서 후원합니다.
          </p>
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-64 h-16 px-6 py-2.5 bg-gray-900 rounded-full">
        <p className="text-base font-medium leading-9 text-center text-white">
          자세히 알아보기
        </p>
      </div>
    </div>
  </section>
)

export default Sponsor
