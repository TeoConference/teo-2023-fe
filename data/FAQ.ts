import { FAQ as FAQType } from '@/types'

interface FAQData {
  [key: string]: FAQType[]
}

export const faqData: FAQData = {
  APPLY: [
    {
      question: '등록이 잘 되었는지 어떻게 확인할 수 있나요?',
      answer:
        '참가 등록의 경우 festa를 통해 확인하실 수 있습니다. 추가적으로 참가 신청을 완료하신 분들에게는 리마인드 메일을 보내드릴 예정입니다.',
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
        '사전에 참가자들의 굿즈를 제작해 행사 당일 전달드릴 예정입니다. 공지된 신청 기간 이후에는 등록이 불가능하며 현장 등록도 불가능합니다.',
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
  { question: 'question2', answer: 'answer2' },
]

export const CodeOfConductData: FAQType[] = [
  {
    question: '1.참여자를 존중해주세요.',
    answer:
      '행사 진행 중 성적 묘사, 스토킹, 프라이버시 침해, 컨퍼런스를 방해하는 행위, 외모, 연령, 경력, 언어에 대한 차별 또는 위 행동을 옹호하는 행위는 모두 금지됩니다. 위 행동을 위반한 경우 경고 및 퇴장 처리가 이루어질 수 있습니다.',
  },
  {
    question: '2.적극적인 참여를 부탁드립니다.',
    answer:
      '테오콘은 누구나 참여할 수 있는 컨퍼런스를 지향합니다. 원활한 진행을 위해 참여자 여러분의 적극적인 참여를 부탁드립니다. 혹시 관련해서 어려우신 점이 있다면 스태프에게 말씀 부탁드립니다.',
  },
  {
    question: '3.타인의 프라이버시를 지켜주세요.',
    answer:
      '누군가는 사진 촬영을 원하지 않을 수 있습니다. 타인의 얼굴이 포함되는 사진은 최대한 자제 부탁드립니다.',
  },
]
