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
    <section
      id="introduce"
      className="content py-12 tablet:py-28 desktop:py-36 px-4"
    >
      <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px]  m-auto">
        <div className="flex flex-col items-center max-w-[560px]">
          <div className="flex flex-col space-y-2 items-center">
            <p className="tablet:text-h1 text-mobile-h1 leading-10 text-center">
              모두에게 <br className="block tablet:hidden" />
              열려있는 컨퍼런스
            </p>
            <p className="tablet:text-h3 text-mobile-h2 text-center text-gray-900">
              테오의 스프린트가 컨퍼런스로 돌아왔어요!
            </p>
          </div>
          <p className="tablet:text-body1 text-mobile-body2 text-center mt-6 text-gray-900">
            테오의 컨퍼런스는{' '}
            <strong className="text-green-main rounded-lg">
              &quot;모두에게 열려있는 컨퍼런스&quot;
            </strong>{' '}
            라는 컨셉을 목표로 <br className="hidden tablet:block" />
            서로가 갖고 있는 다양한 경험과 지식을 공유하고{' '}
            <br className="hidden tablet:block" />
            개발자들간에 소통하는 시간을 만들기 위해 기획되었어요!
          </p>
        </div>
        <div className="bg-black rounded-3xl mt-[2.25rem] max-w-[85rem] w-full tablet:h-[36.875rem] h-[23.75rem]">
          <div className="overflow-hidden">
            <p className="text-h2 m-auto w-full text-white tablet:mt-10 tablet:block hidden text-center">
              언제나 궁금했던 이야기들
            </p>
            <div className="tablet:mt-12 mt-6 flex">
              <SwiperSlide className="flex justify-between gap-10">
                {talkData.map((talk, i) => (
                  <Talk
                    key={i}
                    contents={talk.contents}
                    speaker={talk.speaker}
                    Icon={Icon(i)}
                    classNames={i == 3 ? 'mr-10 mt-10' : i % 2 ? 'mt-10' : ''}
                  />
                ))}
              </SwiperSlide>
              <SwiperSlide className="flex justify-between gap-10">
                {talkData.map((talk, i) => (
                  <Talk
                    key={i}
                    contents={talk.contents}
                    speaker={talk.speaker}
                    Icon={Icon(i)}
                    classNames={i == 3 ? 'mr-10 mt-10' : i % 2 ? 'mt-10' : ''}
                  />
                ))}
              </SwiperSlide>
              <SwiperSlide className="flex justify-between gap-10">
                {talkData.map((talk, i) => (
                  <Talk
                    key={i}
                    contents={talk.contents}
                    speaker={talk.speaker}
                    Icon={Icon(i)}
                    classNames={i == 3 ? 'mr-10 mt-10' : i % 2 ? 'mt-10' : ''}
                  />
                ))}
              </SwiperSlide>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce
