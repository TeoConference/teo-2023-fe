import React from 'react'

const NameCard = () => (
  <section className="flex flex-col space-y-16 items-center justify-start py-[180px]">
    <div className="flex flex-col space-y-20 items-center justify-start">
      <div className="flex flex-col space-y-12 items-center justify-start">
        <div className="flex flex-col space-y-4 items-center justify-start">
          <p className="text-5xl font-bold leading-10 text-center">
            나만의 명함 만들기
          </p>
          <p className="text-2xl font-bold leading-10 text-center">
            나를 소개하는 멋진 명함을 만들어보세요!
          </p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg" />
    </div>
    <div className="inline-flex items-center justify-center w-1/5 h-16 px-6 py-2.5 bg-gray-900 rounded-full">
      <p className="text-base font-medium leading-9 text-center text-white">
        자세히 알아보기
      </p>
    </div>
  </section>
)

export default NameCard
