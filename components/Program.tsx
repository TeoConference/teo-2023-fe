import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import QuestionMark1 from '@/public/images/QuestionMark1.svg'
import QuestionMark2 from '@/public/images/QuestionMark2.svg'

const Program = () => (
  <section id="content1" className="content bg-gray-100">
    <div className="relative space-y-12 px-8 pt-36 m-auto">
      <div className="flex flex-col mobile:space-y-12 space-y-6 items-center">
        <div className="flex flex-col mobile:space-y-4 space-y-2 items-center">
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
      <div className="grid desktop:grid-cols-2 grid-cols-1 desktop:gap-4 text-white desktop-xl:max-w-[1360px] desktop:max-w-[900px] m-auto desktop:h-[330px] desktop-xl:h-[480px] desktop:overflow-hidden">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className={clsx(
              'flex bg-black desktop:rounded-xl border-t mobile:p-6 p-4 desktop:p-8 desktop-xl:h-[294px] desktop:h-[190px] tablet:h-[136px] h-[100px] justify-between',
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
                  'w-[60px] h-[60px] tablet:min-w-[70px] tablet:min-h-[70px] tablet:w-full tablet:gh-full desktop:min-w-[130px] desktop:min-h-[130px] desktop:h-full desktop:w-full'
                )}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-t from-white z-50 to-transparent w-full h-[140px] desktop-xl:h-[198px] left-0 absolute -bottom-2 hidden desktop:block" />
    </div>
  </section>
)

export default Program
