import React from 'react'

import { ReactComponent as QR } from 'assets/images/QR.svg'
import animal from 'assets/images/SampleAnimal.png'

const Card = () => {
  return (
    <div className="bg-orange-100 p-4 w-1/2 m-auto max-w-sm">
      <div className="flex flex-col relative h-52 justify-between">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-bold text-orange-400">
              시니어 프론트엔드 개발자
            </div>
            <div className="flex flex gap-1 items-center text-xs text-gray-500">
              <span>카카오</span>/<span>14년차 개발자</span>
            </div>
          </div>
          <QR className="w-8 h-8" />
        </div>
        <div className="absolute py-30 text-slate-800 text-3xl font-bold w-full h-full flex items-center justify-center">
          Teo.yu
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <span>#Svelte</span>
          <span>#함수형 프로그래밍</span>
        </div>
        <img
          src={animal}
          alt="animal"
          className="w-24 h-24 absolute bottom-0 right-0 transform translate-y-4 translate-x-2"
        />
      </div>
    </div>
  )
}

export default Card
