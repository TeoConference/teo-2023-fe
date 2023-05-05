import React from 'react'
import KakaoMap from '@/components/common/KakaoMap'

const Map = () => {
  return (
    <section
      id="content5"
      className="content bg-gray-900 py-12 tablet:py-28 desktop:py-36 px-4"
    >
      <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
        <div className="h-full tablet:space-y-20 space-y-10 w-full">
          <div className="space-y-4 tablet:space-y-8">
            <div className="text-mobile-h1 tablet:text-h1 text-white w-full text-center">
              5월 20일 <br className="block tablet:hidden" />
              <span className="text-green-500">여기서 만나요!</span>
            </div>
            <p className="text-mobile-h2 tablet:text-h3 text-center text-white">
              신촌역 3번출구에서 300M 내에{' '}
              <br className="block tablet:hidden" /> 위치하고 있습니다!
            </p>
          </div>
          <KakaoMap
            latitude={37.55759668300872}
            longitude={126.93709078486495}
          />
        </div>
      </div>
    </section>
  )
}

export default Map
