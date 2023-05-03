import { FAQ as FAQType } from '@/types'

interface FAQData {
  [key: string]: FAQType[]
}

export const faqData: FAQData = {
  APPLY: [
    {
      question: 'APPLY',
      answer: '네/아니오',
    },
    {
      question: '당일 현장 등록할 수 있나요?',
      answer: '네/아니오',
    },
  ],
  ON_SITE: [
    {
      question: 'ON_SITE',
      answer: '네/아니오',
    },
  ],
  EVENT: [
    {
      question: 'EVENT',
      answer: '네/아니오',
    },
  ],
  ETC: [
    {
      question: 'ETC',
      answer: '네/아니오',
    },
  ],
}

export const NoticeData: FAQType[] = [
  { question: 'question1', answer: 'answer1' },
  { question: 'question1', answer: 'answer1' },
]

export const CodeOfConductData: FAQType[] = [
  { question: 'question1', answer: 'answer1' },
  { question: 'question1', answer: 'answer1' },
]
