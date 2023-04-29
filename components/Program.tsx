import React from 'react'

const Program = () => (
  <section className="bg-gray-100">
    <div className="flex flex-col space-y-12 justify-center px-8 py-36 desktop:w-[1360px] mx-auto">
      <div className="flex flex-col space-y-12 items-center justify-start">
        <div className="flex flex-col space-y-4 items-center justify-start">
          <p className="text-5xl font-bold leading-10 text-center">프로그램</p>
          <p className="text-2xl font-bold leading-10 text-center">
            소중한 경험을 나눠줄 스피커의 이야기가 준비되어 있어요!
          </p>
        </div>
        <p className="text-xl leading-9 text-center">
          (스피커와 주제는 사정에 따라 변경이 될 수도 있습니다.)
        </p>
      </div>

      <div className="flex flex-col justify-stretch flex-wrap gap-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex space-y-5 items-start justify-start bg-gray-200 rounded-3xl p-12 h-[294px]"
          >
            <div className="flex flex-col space-y-3 items-start justify-start">
              <p className="text-2xl font-bold leading-10">COMING SOON</p>
              <p className="text-base font-bold leading-normal text-center">
                SPEAKER
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Program
