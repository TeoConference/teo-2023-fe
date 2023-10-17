import { FAQ as FAQType } from '@/types'

interface FAQData {
  [key: string]: FAQType[]
}

export const faqData: FAQData = {
  APPLY: [
    {
      question: '등록이 잘 되었는지 어떻게 확인할 수 있나요?',
      answer:
        'festa를 통해 확인하실 수 있습니다. 추가적으로 참가 신청을 완료하신 분들에게는 리마인드 메일을 보내드릴 예정입니다.',
    },
    {
      question: '행사 정원이 몇 명인가요?',
      answer:
        '본 행사는 오프라인으로 진행되며 공간과 좌석의 한계로 인해 행사 정원은 30명입니다. 참가자분들의 양해 부탁드립니다.',
    },
    {
      question: '티켓 양도가 가능한가요?',
      answer:
        '행사 당일 불가피하게 당사자 참가가 어려울 경우에 한 해 티켓 양도가 가능합니다. 단 참가자 굿즈는 사전 제작으로 변경이 불가능합니다.',
    },
  ],
  ON_SITE: [
    {
      question: '발표 시간보다 늦게 도착할 것 같습니다. 괜찮을까요?',
      answer:
        '네. 늦게 오셔도 4층 등록 데스크에서 등록 확인 후 입장하실 수 있습니다.',
    },
    {
      question: '행사 당일 현장 등록이 가능한가요?',
      answer:
        '사전에 참가자들의 굿즈를 제작해 행사 당일 전달드릴 예정입니다. 공지된 신청 기간 이후에는 등록이 불가능하며 현장 등록도 불가능합니다.',
    },
  ],
  EVENT: [
    {
      question: '추후에 발표 영상이 공개되나요?',
      answer:
        '본 행사는 영상 녹화를 따로 진행하지 않을 예정입니다. 참가자분들의 양해 부탁드립니다.',
    },
  ],
  ETC: [
    {
      question: '음식물 반입이 가능한가요?',
      answer:
        '행사 당일 1인 1음료가 제공될 예정이며 이외 음식물은 반입이 어렵습니다.',
    },
  ],
}

export const CodeOfConductData: FAQType[] = [
  {
    question: '1. 서로를 존중해 주세요.',
    answer:
      '건강한 의견 공유를 위해 타인의 권리를 침해하거나 타인에게 불쾌감을 줄 수 있는 발언을 금지합니다. 성적 묘사, 스토킹, 프라이버시 침해 등의 타인에게 불쾌감을 줄 수 있는 발언은 금지되며 인종, 외모, 장애, 정치, 종교 등의 개인에 대한 차별적인 발언 또한 금지됩니다.',
  },
  {
    question: '2. 적극적으로 참여해 주세요.',
    answer:
      '‘누구나’ 참여할 수 있는 컨퍼런스입니다. 저희 스태프는 이를 위하여 프로그램들을 준비하였으며 원활한 진행을 위해 참여자 여러분의 적극적 참여를 부탁드립니다.',
  },
  {
    question: '3. 타인의 프라이버시를 지켜주세요.',
    answer:
      '참가자분들 중에는 사진 촬영을 원하지 않는 분들도 있을 수 있으니 타인의 얼굴이 포함되는 사진은 최대한 자제 부탁드립니다.',
  },
  {
    question: '4. 도움이 필요하시면 자유롭게 요청하세요.',
    answer:
      '만약 행사 도중 도움이 필요하시면 주위에 도움을 요청하세요. 또한 도움을 요청받으셨다면 주저하지 말고 도와주세요.',
  },
]
