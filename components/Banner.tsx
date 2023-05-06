import Image from 'next/image'
import React from 'react'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'

import TeoBI from '@/public/images/TeoBI.png'
import TeoBI2 from '@/public/images/TeoBI2.png'
import Mouse from '@/public/images/Mouse.svg'
import Down from '@/public/images/Down.svg'

const Banner = () => {
  return (
    <section
      id="banner"
      className="content bg-black text-white h-[calc(100vh_-_3rem)] flex-center relative tablet:px-10"
    >
      <div className="w-full h-full flex-center flex-col tablet:justify-between desktop:justify-around desktop:max-w-[1360px] desktop:mt-50">
        <div className="w-full tablet:pt-16 tablet:pl-16 desktop:hidden">
          <Image
            priority={true}
            className="ml-[-48px] tablet:w-[192px] tablet:h-[192px] tablet:ml-0"
            alt="TeoBI2"
            src={TeoBI2}
            width={126}
            height={125}
          />
        </div>
        <div className="hidden desktop:flex w-full justify-end">
          <Image
            priority={true}
            alt="TeoBI"
            src={TeoBI}
            width={461}
            height={281}
          />
        </div>
        <div className="flex w-full flex-center tablet:flex-start tablet:items-end">
          <div className="z-[1] mt-[-30px] tablet:mt-0 desktop:w-full desktop:flex desktop:flex-col desktop:items-start desktop:space-y-20">
            <h1 className="font-Pretendard font-bold text-[3.75rem] tablet:text-[4.375rem] desktop:text-[5rem] leading-[56px] tracking-[-0.6%] text-center desktop:text-right">
              TEOConf 2023
            </h1>
            <div className="font-Pretendard font-semibold text-[1.375rem] tablet:text-[2.375rem] desktop:text-[3rem] space-y-2 tracking-[-0.6%] mt-7">
              <div className="text-center desktop:text-left">
                테오의 컨퍼런스
              </div>
              <div className="text-center desktop:text-left">
                23.05.20 토요일, 사람인 카페
              </div>
            </div>
          </div>
          <div className="hidden gap-2 desktop:block">
            <Image alt="scroll down" src={Mouse} width={26} height={40} />
            <Image
              className="m-auto mt-2 desktop:animate-bounce"
              alt="scroll down"
              src={Down}
              width={12}
              height={12}
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 tablet:relative tablet:w-full tablet:flex tablet:justify-end tablet:mr-16 desktop:hidden">
          <Image
            priority={true}
            width={302}
            height={184}
            alt="TeoBI"
            src={TeoBI}
          />
        </div>
        <div className="w-full flex-center desktop:justify-end">
          <KeyboardDoubleArrowDownOutlinedIcon className="absolute bottom-20 animate-bounce tablet:hidden" />
        </div>
      </div>
    </section>
  )
}

export default Banner
