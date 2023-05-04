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
    <section id="content6" className="content">
      <div className="flex flex-col gap-6 items-center max-w-[1024px] mx-auto px-8 py-16">
        <div className="flex flex-col">
          <p className="text-mobile-h1 tablet:text-h1 text-center">
            자주 묻는 질문
          </p>
          <div className="text-mobile-sub-h2 tablet:text-sub-h1 inline-flex tablet:mt-2">
            <button
              type="button"
              className={clsx(
                'text-gray-900 px-2 py-1',
                selected === Category.APPLY &&
                  'text-green-main border-green-main border-b'
              )}
              onClick={() => onClickCategory(Category.APPLY)}
            >
              참가신청
            </button>
            <button
              type="button"
              className={clsx(
                'text-gray-90 px-2 py-1',
                selected === Category.ON_SITE &&
                  'text-green-main border-green-main border-b'
              )}
              onClick={() => onClickCategory(Category.ON_SITE)}
            >
              현장당일
            </button>
            <button
              type="button"
              className={clsx(
                'px-2 py-1 text-gray-900',
                selected === Category.EVENT &&
                  'text-green-main border-green-main border-b'
              )}
              onClick={() => onClickCategory(Category.EVENT)}
            >
              행사/세션
            </button>
            <button
              type="button"
              className={clsx(
                'px-2 py-1 text-gray-900',
                selected === Category.ETC &&
                  'text-green-main border-green-main border-b'
              )}
              onClick={() => onClickCategory(Category.ETC)}
            >
              기타
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 tablet:gap-4 w-full max-w-[860px]">
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
