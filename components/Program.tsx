import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import QuestionMark1 from '@/public/images/QuestionMark1.svg'
import QuestionMark2 from '@/public/images/QuestionMark2.svg'

const Program = () => (
  <section className="relative p-12 tablet:p-28 desktop:pb-0 desktop:pt-36 px-4 bg-gray-100">
    <div className="flex-col gap-12 w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px]  m-auto">
      <div className="flex flex-col tablet:space-y-12 space-y-6 items-center w-full">
        <div className="flex flex-col tablet:space-y-4 space-y-2 items-center">
          <p className="text-mobile-h1 tablet:text-h1 text-center">프로그램</p>
          <p className="text-mobile-h2 tablet:text-h3 text-center">
            소중한 경험을 나눠줄
            <br className="block tablet:hidden" />
            스피커의 이야기가 준비되어 있어요!
          </p>
        </div>
        <p className="text-mobile-body2 tablet:text-body1 text-center">
          스피커와 주제는 사정에 따라 변경이 될 수도 있습니다.
        </p>
      </div>
      <div className="w-full grid desktop:grid-cols-2 grid-cols-1 desktop:gap-4 text-white desktop:h-[330px] desktop-xl:h-[480px] desktop:overflow-hidden">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className={clsx(
              'flex bg-black desktop:rounded-xl border-t tablet:p-6 p-4 desktop:p-8 desktop-xl:h-[294px] desktop:h-[190px] tablet:h-[136px] h-[100px] justify-between',
              i == 0 ? 'rounded-t-lg' : i == 3 ? 'rounded-b-lg' : ''
            )}
          >
            <div className="flex flex-col tablet:space-y-3">
              <p className="tablet:text-h3 text-mobile-h2">COMING SOON</p>
              <p className="tablet:text-sub-h2 text-mobile-sub-h2">SPEAKER</p>
            </div>
            <div className="flex h-full items-center">
              <Image
                src={i < 2 ? QuestionMark1 : QuestionMark2}
                alt="question-mark"
                className={clsx(
                  'w-[60px] h-[60px] tablet:w-[70px] tablet:h-[70px] desktop:w-[130px] desktop:h-[130px]'
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-gradient-to-t from-white z-50 to-transparent w-full h-[140px] desktop-xl:h-[198px] left-0 absolute -bottom-2 hidden desktop:block" />
  </section>
)

export default Program
