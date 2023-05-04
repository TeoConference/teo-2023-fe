import React from 'react'
import KakaoMap from '@/components/common/KakaoMap'

const Map = () => {
  return (
    <div className="w-full bg-gray-900 tablet:p-24 py-12 px-6 tablet:px-24 tablet:py-24 desktop:px-20">
      <div className="flex flex-col h-full tablet:gap-20 gap-10 items-center justify-around tablet:w-full">
        <div className="flex flex-col flex-wrap gap-4 tablet:gap-8 w-full items-center justify-center">
          <div className="text-mobile-h1 tablet:text-h1 text-white w-full text-center">
            5월 20일 <br className="block tablet:hidden" />
            <span className="text-green-500">여기서 만나요!</span>
          </div>
          <p className="text-mobile-h2 tablet:text-h3 text-center text-white">
            신촌역 3번출구에서 300M 내에 <br className="block tablet:hidden" />{' '}
            위치하고 있습니다!
          </p>
        </div>
        <div className="w-full max-w-[1024px]">
          <KakaoMap
            latitude={37.55759668300872}
            longitude={126.93709078486495}
          />
        </div>
      </div>
    </div>
  )
}

export default Map
