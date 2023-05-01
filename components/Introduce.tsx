import React from 'react'
import Image from 'next/image'

import SwiperSlide from '@/components/common/SwiperSlide'
import Talk from '@/components/introduce/Talk'
import { talkData } from '@/data/Talk'
import Introduce1 from '@/public/images/Introduce1.svg'
import Introduce2 from '@/public/images/Introduce2.svg'
import Introduce3 from '@/public/images/Introduce3.svg'
import Introduce4 from '@/public/images/Introduce4.svg'

const Icon = (index: number) => {
  switch (index) {
    case 0:
      return (
        <Image
          src={Introduce1}
          alt="introduce"
          width="128"
          height="91"
          className="ml-16"
        />
      )
    case 1:
      return (
        <Image
          src={Introduce2}
          alt="introduce"
          width="128"
          height="107"
          className="ml-16"
        />
      )
    case 2:
      return (
        <Image
          src={Introduce3}
          alt="introduce"
          width="128"
          height="91"
          className="ml-16"
        />
      )
    case 3:
      return (
        <Image
          src={Introduce4}
          alt="introduce"
          width="128"
          height="91"
          className="ml-16"
        />
      )
    case 4:
      return (
        <Image
          src={Introduce2}
          alt="introduce"
          width="128"
          height="91"
          className="ml-16"
        />
      )
    case 5:
      return (
        <Image
          src={Introduce4}
          alt="introduce"
          width="128"
          height="107"
          className="ml-16"
        />
      )
  }
}

const Introduce = () => {
  return (
    <section className="flex-col w-full flex-center mobile:py-[11.25rem] py-[4.125rem] tablet:px-32 px-4">
      <div className="flex flex-col mobile:space-y-12 items-center justify-start mobile:max-w-[33.43rem] max-w-[19.25rem]">
        <div className="flex flex-col mobile:space-y-6 space-y-2 items-center justify-start">
          <p className="mobile:text-h1 text-mobile-h1 leading-10 text-center">
            모두에게
            <br className="block mobile:hidden" />
            열려있는 컨퍼런스
          </p>
          <p className="mobile:text-h3 text-mobile-h2 text-center text-gray-900">
            테오의 스프린트가 컨퍼런스로 돌아왔어요!
          </p>
        </div>
        <p className="tablet:text-body1 tablet:leading-9 leading-7 mt-6 text-center text-gray-900">
          테오의 컨퍼런스는{' '}
          <strong className="text-green-main rounded-lg">
            &quot;모두에게 열려있는 컨퍼런스&quot;
          </strong>{' '}
          라는 컨셉을 목표로{' '}
          <strong>서로가 갖고 있는 다양한 경험과 지식을 공유</strong>하고
          <strong> 개발자들간에 소통하는 시간</strong>을 만들기 위해
          기획되었어요!
        </p>
      </div>
      <div className="bg-black rounded-3xl mobile:mt-[4.75rem] mt-[2.25rem] max-w-[85rem] w-full mobile:h-[36.875rem] h-[23.75rem]">
        <div className="overflow-hidden">
          <p className="m-auto w-full text-white mobile:text-h2 mobile:block hidden mobile:mt-10 leading-10 text-center">
            언제나 궁금했던 이야기들
          </p>
          <div className="mobile:mt-12 mt-6 flex">
            <SwiperSlide className="flex justify-between gap-10 ml-12">
              {talkData.map((talk, i) => (
                <Talk
                  key={i}
                  contents={talk.contents}
                  speaker={talk.speaker}
                  Icon={Icon(i)}
                  classNames={i % 2 ? 'mt-10' : ''}
                />
              ))}
            </SwiperSlide>
            <SwiperSlide className="flex justify-between gap-10 ml-10">
              {talkData.map((talk, i) => (
                <Talk
                  key={i}
                  contents={talk.contents}
                  speaker={talk.speaker}
                  Icon={Icon(i)}
                  classNames={i % 2 ? 'mt-10' : ''}
                />
              ))}
            </SwiperSlide>
            <SwiperSlide className="flex justify-between gap-10 ml-10">
              {talkData.map((talk, i) => (
                <Talk
                  key={i}
                  contents={talk.contents}
                  speaker={talk.speaker}
                  Icon={Icon(i)}
                  classNames={i % 2 ? 'mt-10' : ''}
                />
              ))}
            </SwiperSlide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce
