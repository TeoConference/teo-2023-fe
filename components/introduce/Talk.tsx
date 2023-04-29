import React from 'react'
import clsx from 'clsx'

interface TalkProps {
  contents: string
  speaker: string
  classNames?: string
}

const Talk = ({ contents, speaker, classNames }: TalkProps) => {
  return (
    <li className={clsx('flex flex-col gap-10 whitespace-pre', classNames)}>
      <div className="flex flex-col relative space-y-5 items-start justify-start px-8 py-10 bg-white rounded-3xl">
        <p className="tablet:text-xl text-lg font-bold text-gray-900">
          {contents}
        </p>
        <p className="text-base leading-normal text-center text-gray-900">
          {speaker}
        </p>
        <div className="absolute transform bottom-[-1rem] left-[3rem] rotate-45 h-10 w-12 bg-white rounded-lg" />
      </div>
      <div className="h-32 w-32 bg-gray-300 rounded-full ml-24" />
    </li>
  )
}

export default Talk
