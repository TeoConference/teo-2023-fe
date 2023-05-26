import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import chedar from '@/public/images/speakers/chedar.png'
import derrick from '@/public/images/speakers/derrick.png'
import moseung from '@/public/images/speakers/moseung.png'
import nagnae from '@/public/images/speakers/nagnae.png'
import parang from '@/public/images/speakers/parang.png'
import teo from '@/public/images/speakers/teo.png'
import SaveAltIcon from '@mui/icons-material/SaveAlt'

const SPEAKERS = [
  {
    id: 'moseung',
    src: moseung,
    title: '테오의 스프린트에서 배운 a~z까지 개발 경험기',
    subtitle:
      '테오의 스프린트 다회차 경험 + 진행까지 맡아본 경험으로 취업까지 성공하기',
    korname: '모승',
    pdf: 'https://drive.google.com/file/d/1prp7V-azTeW6ItMdsnIQQi3GMPktqwl0/view?usp=sharing',
  },
  {
    id: 'chedar',
    src: chedar,
    title: '안녕하세요, 프론트엔드 개발 인턴입니다.',
    subtitle: '인턴으로 할 수 있었던 경험 A - Z',
    korname: '체다',
    pdf: 'https://drive.google.com/file/d/1vd32vqnrVs-9WQMX8e8Z9S3g1KnamlBq/view?usp=sharing',
  },
  {
    id: 'derrick',
    src: derrick,
    title: '중요한건 꺾여도 그냥 하는 마음',
    subtitle:
      '희귀난치병 환자가 비대면 진료 스타트업 개발자가 되기까지 배운 것',
    korname: '데릭',
    pdf: 'https://drive.google.com/file/d/1RTMFrXTblqiC6mRufI31OAmDYamq26JA/view?usp=sharing',
  },
  {
    id: 'parang',
    src: parang,
    title: '디자인 컴포넌트 구성하기',
    subtitle: '프로젝트에 옷장 만들기 with React',
    korname: '파랑',
    pdf: 'https://drive.google.com/file/d/1ZvNdN9Fikz-k_FinSgF6KIuDcb1z8UbX/view?usp=sharing',
  },
  {
    id: 'nagnae',
    src: nagnae,
    title: '16년에 FE를 배우는 기분, 23년에 FE 개발자로 일하는 기분',
    subtitle: '프론트엔드 개발자로 일하며 느낀 현실과 이상',
    korname: '나그네',
    pdf: 'https://drive.google.com/file/d/1epjVFYSjEowyJ3Hi86R7cvewn_n2zEWr/view?usp=sharing',
  },
  {
    id: 'teo',
    src: teo,
    title: '잘하는 개발자가 되는 그라데이션 사고법',
    subtitle: 'FE개발자 관점의 추상화된 계층에 대한 이해',
    korname: '테오',
    pdf: 'https://drive.google.com/file/d/1mXfVjiRJ-e-i9UjpZkuxdCyptZdWvuMb/view?usp=sharing',
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
      <div className="w-full grid tablet:grid-cols-2 tablet:gap-4 text-white">
        {SPEAKERS.map((speaker, i) => (
          <div
            key={speaker.id}
            className={clsx(
              'flex flex-col bg-black tablet:rounded-xl tablet:p-6 desktop:p-6 desktop-xl:p-8 desktop:justify-between justify-between break-keep',
              i == 0 ? 'rounded-t-lg' : i == 5 ? 'rounded-b-lg' : '',
              i < 5 ? 'px-4 pt-5 pb-0' : 'px-4 pt-5 pb-4'
            )}
          >
            <div
              className={clsx(
                `h-full w-full flex flex-col justify-between tablet:border-none`,
                i < 5 ? 'border-b border-white pb-5 tablet:pb-0' : ''
              )}
            >
              <div className="flex flex-col tablet:space-y-3">
                <span className="tablet:text-sub-h1 text-sub-h2 tablet:flex tablet:justify-start items-start text-green-main">
                  {speaker.title}
                </span>
                <span className="tablet:text-body2 text-mobile-body2">
                  {speaker.subtitle}
                </span>
              </div>
              <div className="flex justify-between items-end mt-4 desktop:items-end">
                <div className="flex flex-col justify-between desktop:flex-row desktop:gap-4 desktop:items-center">
                  <div>
                    <span className="tablet:text-sub-h2 text-mobile-sub-h2">
                      {speaker.korname}{' '}
                    </span>
                    <span className="text-mobile-body2 tablet:text-body2">
                      | 프론트엔드 개발자
                    </span>
                  </div>
                  <button className="border rounded w-fit py-1 px-2 mt-2 desktop:mt-0">
                    <a
                      href={speaker.pdf}
                      target="_blank"
                      className="text-mobile-body2 hover:text-gray-300 transition tablet:text-body3 flex items-center gap-1"
                    >
                      <SaveAltIcon className="w-4 h-4" /> 발표자료
                    </a>
                  </button>
                </div>
                <Image
                  src={speaker.src}
                  alt={speaker.id}
                  className={clsx(
                    'w-[50px] h-[50px] tablet:w-[60px] tablet:h-[60px] desktop:w-[80px] desktop:h-[80px]'
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
