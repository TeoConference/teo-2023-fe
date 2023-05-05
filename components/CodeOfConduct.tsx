import React from 'react'

import FAQField from './common/FAQField'
import { CodeOfConductData } from '@/data/FAQ'
import type { FAQ as FAQType } from '@/types'

const CodeOfConduct = () => {
  return (
    <section className="flex flex-col gap-6 items-center mx-auto px-4 box-border py-16 w-full">
      <div className="flex flex-col">
        <p id="sub2" className="text-mobile-h1 tablet:text-h1 text-center">
          행동강령
        </p>
      </div>
      <div className="flex flex-col gap-2 tablet:gap-4 w-full desktop:w-[768px] desktop-xl:w-[1024px]">
        {CodeOfConductData.map((faq: FAQType) => (
          <FAQField
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  )
}

export default CodeOfConduct
