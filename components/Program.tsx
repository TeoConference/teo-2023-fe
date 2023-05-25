import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import QuestionMark1 from '@/public/images/QuestionMark1.svg'
import QuestionMark2 from '@/public/images/QuestionMark2.svg'

import chedar from '@/public/images/speakers/chedar.png'
import derrick from '@/public/images/speakers/derrick.png'
import moseung from '@/public/images/speakers/moseung.png'
import nagnae from '@/public/images/speakers/nagnae.png'
import parang from '@/public/images/speakers/parang.png'
import teo from '@/public/images/speakers/teo.png'

const SPEAKERS = [
  {
    id: 'moseung',
    src: moseung,
    title: '테오의 스프린트에서 배운 a~z까지 개발 경험기',
    subtitle:
      '테오의 스프린트 다회차 경험 + 진행까지 맡아본 경험으로 취업까지 성공하기',
    korname: '모승',
  },
  {
    id: 'chedar',
    src: chedar,
    title: '안녕하세요, 프론트엔드 개발 인턴입니다.',
    subtitle: '인턴으로 할 수 있었던 경험 A - Z',
    korname: '체다',
  },
  {
    id: 'derrick',
    src: derrick,
    title: '중요한건 꺾여도 그냥 하는 마음',
    subtitle:
      '희귀난치병 환자가 비대면 진료 스타트업 개발자가 되기까지 배운 것',
    korname: '데릭',
  },
  {
    id: 'parang',
    src: parang,
    title: '디자인 컴포넌트 구성하기',
    subtitle: '프로젝트에 옷장 만들기 with React',
    korname: '파랑',
  },
  {
    id: 'nagnae',
    src: nagnae,
    title: '16년에 FE를 배우는 기분, 23년에 FE 개발자로 일하는 기분',
    subtitle: '프론트엔드 개발자로 일하며 느낀 현실과 이상',
    korname: '나그네',
  },
  {
    id: 'teo',
    src: teo,
    title: '잘하는 개발자가 되는 그라데이션 사고법',
    subtitle: 'FE개발자 관점의 추상화된 계층에 대한 이해',
    korname: '테오',
  },
]

const Program = () => (
  <section
    id="program"
    className="content relative p-12 tablet:p-28 desktop:pb-20 desktop:pt-36 desktop-xl:pb-24 px-4 bg-gray-100"
  >
    <div className="flex-col gap-12 w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px] m-auto">
      <div className="flex flex-col tablet:space-y-12 space-y-6 items-center w-full">
        <div className="flex flex-col tablet:space-y-4 space-y-2 items-center">
          <p className="text-mobile-h1 tablet:text-h1 text-center">프로그램</p>
          <p className="text-mobile-h2 tablet:text-h3 text-center">
            소중한 경험을 나눠줄
            <br className="block tablet:hidden" />
            스피커의 이야기가 준비되어 있어요!
          </p>
        </div>
      </div>
      <div className="w-full grid tablet:grid-cols-2 desktop:gap-4 text-white desktop:h-fit">
        {SPEAKERS.map((speaker, i) => (
          <div
            key={speaker.id}
            className={clsx(
              'flex flex-col bg-black tablet:rounded-xl  tablet:p-6 tablet:m-[10px] desktop:p-6 desktop-xl:p-8 desktop-xl:w-[670px] desktop-xl:h-[200px] desktop:w-[502px] desktop:h-[210px] tablet:w-[23.375rem] tablet:h-[16.8125rem] desktop:justify-between justify-between break-keep',
              i == 0 ? 'rounded-t-lg' : i == 5 ? 'rounded-b-lg' : '',
              i < 5 ? 'px-4 pt-5 pb-0' : 'px-4 pt-5 pb-4'
            )}
          >
            <div
              className={clsx(
                `h-full w-full flex flex-col justify-between tablet:border-none tablet:p-2`,
                i < 5 ? 'pb-5 border-b border-white' : 'pb-3'
              )}
            >
              <div className="flex flex-col tablet:space-y-3 desktop:h-[60%]">
                <p className="desktop:text-[1.3rem] desktop:leading-7 desktop:font-bold tablet:text-sub-h1 text-sub-h2 tablet:flex tablet:justify-start items-start text-[#00DE4F]">
                  <span>{speaker.title}</span>
                </p>
                <p className="tablet:text-body2 text-[13px] leading-5 desktop:w-[303px] desktop-xl:w-full">
                  {speaker.subtitle}
                </p>
              </div>
              <div className="flex items-end justify-between desktop:items-center desktop:h-[40%] desktop-xl:relative">
                <div>
                  <p>
                    <span className="tablet:text-sub-h2 text-mobile-sub-h2">
                      {speaker.korname}{' '}
                    </span>
                    <span className="tablet:text-[1rem] tablet:leading-6 text-[14px] leading-[22px] font-normal">
                      | 프론트엔드 개발자
                    </span>
                  </p>
                </div>
                <Image
                  src={speaker.src}
                  alt={speaker.id}
                  className={clsx(
                    'w-[50px] h-[50px] tablet:w-[60px] tablet:h-[60px] desktop:w-[80px] desktop:h-[80px] desktop-xl:absolute desktop-xl:right-0 desktop-xl:bottom-1'
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Program
