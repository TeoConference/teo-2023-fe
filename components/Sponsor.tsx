import Image from 'next/image'
import React from 'react'
import JumpitLogo from '../public/images/JumpitLogo.svg'

const Sponsor = () => (
  <section className="flex flex-col items-center justify-center h-[16.195rem] tablet:h-[26.4375rem] desktop:h-[28.9375rem] bg-gray-100">
    <div className="flex-center flex-col">
      <div className="flex-center flex-col">
        <div className="flex-center flex-col">
          <p className="font-Pretendard font-bold text-[2.125rem] tablet:text-[3.125rem] leading-10 text-center">
            후원사 소개
          </p>
          <p className="font-Pretendard font-medium text-[1.125rem] leading-10 text-center tablet:hidden">
            테오의 컨퍼런스 1기는 <br /> 사람인의 &apos;점핏&apos;에서
            후원합니다.
          </p>
          <p className="hidden tablet:block font-Pretendard font-bold text-[1.625rem] mt-8">
            테오의 컨퍼런스 1기는 사람인의 &apos;점핏&apos;에서 후원합니다.
          </p>
        </div>
      </div>
      <div className="flex-center h-fit">
        <Image
          alt="JumpitLogo"
          src={JumpitLogo}
          className="w-[140px] h-[59.13px] tablet:mt-[3.75rem] tablet:w-[206px] tablet:h-[87px]"
        />
      </div>
    </div>
  </section>
)

export default Sponsor
