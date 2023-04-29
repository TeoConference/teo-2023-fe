import React from 'react'

import Talk from './Talk'
import { talkData } from '@/data/Talk'

const SwiperSlide = () => {
  return (
    <ul className="animate-moveLeft flex justify-between gap-10">
      {talkData.map((talk, i) => (
        <Talk
          key={i}
          contents={talk.contents}
          speaker={talk.speaker}
          classNames={i % 2 ? 'mt-10' : ''}
        />
      ))}
    </ul>
  )
}

export default SwiperSlide
