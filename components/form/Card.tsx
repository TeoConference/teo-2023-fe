import React from 'react'
import Image from 'next/image'

import { ReactComponent as QR } from '@/public/images/QR.svg'
import Animal from '@/assets/images/SampleAnimal.png'
import { FormData } from '@/types'

const Card = (props: FormData) => {
  const {
    introduction,
    company,
    nickname,
    developmentCareer,
    hashTagTypeList,
  } = {
    ...props,
  }
  return (
    <div className="bg-orange-100  p-4 m-auto max-w-sm">
      <div className="flex flex-col relative h-52 justify-between">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-bold text-orange-400">
              {introduction}
            </div>
            <div className="flex flex gap-1 items-center text-xs text-gray-500">
              <span>{company}</span>/<span>{developmentCareer}년차</span>
            </div>
          </div>
          <QR className="w-8 h-8" />
        </div>
        <div className="absolute py-30 text-slate-800 text-3xl font-bold w-full h-full flex items-center justify-center">
          {nickname}
        </div>
        <div className="flex items-center flex-wrap gap-2 text-sm text-slate-700">
          {hashTagTypeList?.map((hashTag) => (
            <span key={hashTag}>#{hashTag}</span>
          ))}
        </div>
        <Image
          src={Animal}
          alt="animal"
          className="w-24 h-24 absolute bottom-0 right-0 transform translate-y-4 translate-x-2"
        />
      </div>
    </div>
  )
}

export default Card
