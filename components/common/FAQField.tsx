import React, { useState } from 'react'
import clsx from 'clsx'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'

interface FAQFieldProps {
  question: string
  answer: string
}

const FAQField = ({ question, answer }: FAQFieldProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickFAQ = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col w-full">
      <div
        className={clsx(
          'flex justify-between cursor-pointer w-full items-center px-4 py-2 tablet:py-4 bg-gray-50',
          isOpen ? 'rounded-t-lg' : 'rounded-lg'
        )}
        onClick={onClickFAQ}
        aria-expanded={isOpen}
      >
        <p className="text-mobile-sub-h2 tablet:text-sub-h1 text-gray-900">
          {question}
        </p>
        {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </div>
      <div
        className={clsx(
          'px-4 py-2 bg-gray-50 rounded-b-lg',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <p className="text-mobile-body2 tablet:text-body2 text-gray-900 pb-2 tablet:pb-4">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FAQField
