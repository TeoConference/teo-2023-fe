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
    <div className="flex flex-col gap-2 w-full">
      <div
        className="flex justify-between cursor-pointer w-full space-x-2.5 items-center justify-start px-8 py-5 bg-gray-50 rounded-lg"
        onClick={onClickFAQ}
        aria-expanded={isOpen}
      >
        <p className="text-xl font-bold leading-9 text-gray-900">
          Q. {question}
        </p>
        {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </div>
      <div
        className={clsx(
          'px-8 py-5 bg-gray-50 rounded-lg',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <p className="text-xl font-bold leading-9 text-gray-900">A. {answer}</p>
      </div>
    </div>
  )
}

export default FAQField
