import React from 'react'
import KakaoMap from '@/components/common/KakaoMap'

const Map = () => {
  return (
    <div className="w-full h-screen bg-gray-900 tablet:p-24 p-10">
      <div className="flex flex-col h-full tablet:gap-20 gap-10 items-center justify-around tablet:w-full">
        <div className="flex flex-col flex-wrap gap-4 tablet:gap-8 items-center justify-center">
          <div className="inline-flex flex-wrap gap-2 tablet:gap-4 items-start justify-start text-4xl tablet:text-5xl">
            <p className="font-bold leading-10 text-center text-white">
              5월 20일
            </p>
            <p className="font-bold leading-10 text-center text-green-500">
              여기서 만나요!
            </p>
          </div>
          <p className="text-xl tablet:text-2xl font-bold leading-10 tablet:text-center text-white">
            신촌역 3번출구에서 300M 내에 위치하고 있습니다!
          </p>
        </div>
        <div className='w-full desktop:max-w-[1360px]'>
          <KakaoMap latitude={37.55759668300872} longitude={126.93709078486495} />
        </div>
      </div>
    </div>
  )
}

export default Map
