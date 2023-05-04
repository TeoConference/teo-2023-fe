import { FAQ as FAQType } from '@/types'

interface FAQData {
  [key: string]: FAQType[]
}

export const faqData: FAQData = {
  APPLY: [
    {
      question: '등록이 잘 되었는지 어떻게 확인할 수 있나요?',
      answer:
        '등록이 잘 되었다면 신청하신 이메일로 리마인드 알림을 발송할 예정이에요.',
    },
  ],
  ON_SITE: [
    {
      question: '행사장 입장 시 준비해야 할 사항은 어떤 것이 있나요?',
      answer:
        '먼저 데스크에서 스태프에게 홈페이지를 통해 신청한 내역과 예약자 정보를 말씀해주세요. 스태프들이 최대한 빨리 굿즈와 함께 입장을 도와드릴게요:)',
    },
    {
      question: '중간에 참석해도 괜찮을까요?',
      answer:
        '중간에 참석하셔도 입구에 있는 스태프에게 말씀하시고 입장하시는데 문제 없습니다. 하지만 환불은 어렵다는 점 알아주시면 감사하겠습니다.',
    },
    {
      question: '당일 현장 등록할 수 있나요?',
      answer:
        '사전에 티켓을 페스타를 통해 받기에, 당일 현장 등록은 불가능합니다.',
    },
  ],
  EVENT: [
    {
      question: '발표 자료와 영상을 다시 볼 수 있나요?',
      answer: '네/아니오',
    },
    {
      question: '발표가 생중계되나요?',
      answer: '네/아니오',
    },
    {
      question: '음식물을 갖고 들어가도 되나요?',
      answer: '가벼운 음료는 가능하나 이외 음식물은 반입이 어렵습니다.',
    },
  ],
  ETC: [
    {
      question: '기타 문의는 아래 공식 이메일로 문의 부탁드립니다.',
      answer: 'help.teocon@gmail.com',
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
