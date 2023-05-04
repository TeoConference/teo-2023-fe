import React from 'react'

import FAQField from './common/FAQField'
import { CodeOfConductData } from '@/data/FAQ'
import type { FAQ as FAQType } from '@/types'

const CodeOfConduct = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 items-center max-w-[1024px] mx-auto px-8 pb-16 tablet:py-16">
        <div className="flex flex-col">
          <p className="text-mobile-h1 tablet:text-h1 text-center">행동강령</p>
        </div>
        <div className="flex flex-col gap-2 tablet:gap-4 w-full max-w-[860px]">
          {CodeOfConductData.map((faq: FAQType) => (
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

export default CodeOfConduct
