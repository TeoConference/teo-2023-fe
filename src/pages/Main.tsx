import React from 'react'
import Header from '../components/common/Header'
import Program from './Main/Program'
import Networking from './Main/NetWorking'
import NameCard from './Main/NameCard'
import Sponsor from './Main/Sponsor'
import Map from './Main/Map'
import Hero from './Main/Hero'
import FAQ from './Main/FAQ'
import Staff from './Main/Staff'
import SNS from './Main/SNS'
import Footer from './Main/Footer'

const Main = () => {
  return (
    <>
      <Header />

      <Hero />

      <section className="flex-col w-full flex-center py-[180px]">
        <div className="flex flex-col space-y-12 items-center justify-start">
          <div className="flex flex-col space-y-4 items-center justify-start">
            <p className="text-5xl font-bold leading-10 text-center">
              모두에게 열려있는 컨퍼런스
            </p>
            <p className="text-2xl font-bold leading-10 text-center text-gray-900">
              “누구나 부담없이 함께 즐겨요!”
            </p>
          </div>

          <p className="text-xl leading-9 text-center text-gray-900">
            테오의 컨퍼런스는{' '}
            <strong>&quot;모두에게 열려있는 컨퍼런스&quot;</strong> 라는 컨셉을
            목표로
            <br />
            <strong>서로가 갖고 있는 다양한 경험과 지식을 공유</strong>하고
            <br />
            <strong>개발자들간에 소통하는 시간</strong>을 만들기 위해
            기획하였습니다.
            <br />
            <br />
            <strong>
              스피커에게는 많은 사람들에게 처음 발표하는 경험과 공간
            </strong>
            을
            <br />
            <strong>참가자들에게는 같은 관심사를 함께 공감</strong>하고 들어주고
            나와 같은 관심사들을 함께 이야기 하면서,
            <br />
            좋은 문화와 좋은 사람들을 경험할 수 있는 소중한 시간이 되었으면
            좋겠습니다.
          </p>
        </div>

        <div className="relative bg-gray-100 rounded-3xl mt-[76px] w-[1360px] h-[630px]">
          <p
            className="absolute text-4xl font-bold leading-10 text-center"
            style={{ left: 481.5, top: 72 }}
          >
            언제나 궁금했던 이야기들
          </p>
          <div
            className="w-32 h-32 absolute bg-gray-300 rounded-full"
            style={{ left: 53, top: 392 }}
          />
          <div
            className="inline-flex flex-col items-start justify-start absolute"
            style={{ left: -30, top: 158 }}
          >
            <div className="flex flex-col space-y-5 items-start justify-start px-8 py-10 bg-white rounded-3xl">
              <p className="text-2xl font-bold leading-10 text-gray-900">
                내 경험을 이야기할 수 있는
                <br />
                기회가 있었으면 좋겠다...
              </p>
              <p className="text-base leading-normal text-center text-gray-900">
                3년차 주니어 FE개발자
              </p>
            </div>
            <div className="transform rotate-45 w-10 h-1/5 bg-white rounded-lg" />
          </div>
          <div
            className="inline-flex flex-col items-start justify-start absolute"
            style={{ left: 359, top: 211 }}
          >
            <div className="flex flex-col space-y-5 items-start justify-start px-8 py-10 bg-white rounded-3xl">
              <p className="text-2xl font-bold leading-10 text-gray-900">
                다른 주니어는
                <br />
                어떻게 성장하고 있을까?
              </p>
              <p className="text-base leading-normal text-center text-gray-900">
                갓 취업한 신입 개발자
              </p>
            </div>
            <div className="transform rotate-45 w-10 h-1/5 bg-white rounded-lg" />
          </div>
          <div
            className="w-32 h-32 absolute bg-gray-300 rounded-full"
            style={{ left: 811, top: 392 }}
          />
          <div
            className="inline-flex flex-col items-start justify-start absolute"
            style={{ left: 728, top: 158 }}
          >
            <div className="flex flex-col space-y-5 items-start justify-start px-8 py-10 bg-white rounded-3xl">
              <p className="text-2xl font-bold leading-10 text-gray-900">
                나와 비슷한 경험을
                <br />
                먼저 겪은 사람은 없을까?
              </p>
              <p className="text-base leading-normal text-center text-gray-900">
                주니어 BE개발자
              </p>
            </div>
            <div className="transform rotate-45 w-10 h-1/5 bg-white rounded-lg" />
          </div>
          <div
            className="w-32 h-32 absolute bg-gray-300 rounded-full"
            style={{ left: 1186, top: 445 }}
          />
          <div className="inline-flex flex-col items-start justify-start absolute inset-y-0 right-0 my-auto">
            <div className="flex flex-col space-y-5 items-start justify-start px-8 py-10 bg-white rounded-3xl">
              <p className="text-2xl font-bold leading-10 text-gray-900">
                사이드 프로젝트
                <br />
                팀원을 구하고 싶은데...
              </p>
              <p className="text-base leading-normal text-center text-gray-900">
                사이드
              </p>
            </div>
            <div className="transform rotate-45 w-10 h-1/5 bg-white rounded-lg" />
          </div>
          <div
            className="w-32 h-32 absolute bg-gray-300 rounded-full"
            style={{ left: 442, top: 445 }}
          />
        </div>
      </section>

      <Program />

      <Networking />

      <NameCard />

      <Sponsor />

      <Map />

      <FAQ />

      <SNS />

      <Staff />

      <Footer />
    </>
  )
}
export default Main
