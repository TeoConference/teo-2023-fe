import React, { useState } from 'react'
import clsx from 'clsx'

import FAQField from '@/components/common/FAQField'
import { faqData } from '@/data/FAQ'
import type { FAQ as FAQType } from '@/types'

enum Category {
  APPLY = 'APPLY',
  ON_SITE = 'ON_SITE',
  EVENT = 'EVENT',
  ETC = 'ETC',
}

const FAQ = () => {
  const [selected, setSelected] = useState(Category.APPLY)

  const onClickCategory = (category: Category) => {
    setSelected(category)
  }

  return (
    <section>
      <div className="flex flex-col space-y-16 items-center justify-start max-w-[1024px] mx-auto px-8 py-36">
        <div className="flex flex-col space-y-8 items-center justify-start">
          <p className="text-5xl font-bold leading-10 text-center">
            자주 묻는 질문
          </p>
          <div className="inline-flex space-x-16 items-start justify-start">
            <button
              type="button"
              className={clsx(
                'text-2xl font-bold leading-10 text-center text-gray-900',
                selected === Category.APPLY && 'text-green-500'
              )}
              onClick={() => onClickCategory(Category.APPLY)}
            >
              참가신청
            </button>
            <button
              type="button"
              className={clsx(
                'text-2xl font-bold leading-10 text-center text-gray-900',
                selected === Category.ON_SITE && 'text-green-500'
              )}
              onClick={() => onClickCategory(Category.ON_SITE)}
            >
              현장당일
            </button>
            <button
              type="button"
              className={clsx(
                'text-2xl font-bold leading-10 text-center text-gray-900',
                selected === Category.EVENT && 'text-green-500'
              )}
              onClick={() => onClickCategory(Category.EVENT)}
            >
              행사/세션
            </button>
            <button
              type="button"
              className={clsx(
                'text-2xl font-bold leading-10 text-center text-gray-900',
                selected === Category.ETC && 'text-green-500'
              )}
              onClick={() => onClickCategory(Category.ETC)}
            >
              기타
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-5 w-full">
          {faqData[selected].map((faq: FAQType) => (
            <FAQField
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
