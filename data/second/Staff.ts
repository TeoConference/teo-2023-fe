import Teo from '@/public/images/staff/Teo.png'
import Domo from '@/public/images/staff/Domo.png'
import Halang from '@/public/images/staff/Halang.png'
import Hubble from '@/public/images/staff/Hubble.png'
import J from '@/public/images/staff/J.png'
import Moseung from '@/public/images/staff/Moseung.png'
import Raul from '@/public/images/staff/Raul.png'
import Sudal from '@/public/images/staff/Sudal.png'
import Three from '@/public/images/staff/Three.png'
import Juni from '@/public/images/staff/Juni.png'
import Anna from '@/public/images/staff/Anna.png'
import Rookie from '@/public/images/staff/Rookie.png'
import { StaticImageData } from 'next/image'

type StaffDataType = {
  id: number
  name: string
  description: string
  image: StaticImageData
  url: string
  position: 'developer' | 'designer'
}

export const StaffData: StaffDataType[] = [
  {
    id: 1,
    name: '테오',
    description: '시니어 웹 프론트엔드 개발자입니다',
    image: Teo,
    url: 'https://github.com/developer-1px',
    position: 'developer',
  },
  {
    id: 2,
    name: '도모',
    description: '대화와 협업을 중요하게 생각하는 개발자',
    image: Domo,
    url: 'https://github.com/kdomo',
    position: 'developer',
  },
  {
    id: 3,
    name: '하랭',
    description: '유저에게 더 좋은 경험을 주고 싶은 개발자',
    image: Halang,
    url: 'https://github.com/haryung-lee',
    position: 'developer',
  },
  {
    id: 4,
    name: '허블',
    description: '망원경처럼 넓은 시야를 가진 개발자',
    image: Hubble,
    url: 'https://github.com/Circlewee',
    position: 'developer',
  },
  {
    id: 5,
    name: '제리',
    description: '꾸준히 기록하며 성장하는 개발자',
    image: J,
    url: 'https://github.com/dmswl98',
    position: 'developer',
  },
  {
    id: 6,
    name: '모승',
    description: '같이 걷는 개발자, 사람과 개발을 좋아하는 개발자',
    image: Moseung,
    url: 'https://github.com/endmoseung',
    position: 'developer',
  },
  {
    id: 7,
    name: '라울',
    description: '성장하는 개발자 라울입니다.',
    image: Raul,
    url: 'https://github.com/key-del-jeeinho',
    position: 'developer',
  },
  {
    id: 8,
    name: '수달',
    description: '수다와 호기심 많은 개발자',
    image: Sudal,
    url: 'https://github.com/headring',
    position: 'developer',
  },
  {
    id: 9,
    name: '쓰리',
    description: '혼자보다는 함께 성장하고 싶은 개발자',
    image: Three,
    url: 'https://github.com/Lee-Yeseul',
    position: 'developer',
  },
  {
    id: 10,
    name: '주니',
    description: '형태와 맥락을 연결하는 디자이너',
    image: Juni,
    url: 'https://www.behance.net/zooni06',
    position: 'designer',
  },
  {
    id: 11,
    name: '애나',
    description: '기록과 소통을 좋아하는 디자이너',
    image: Anna,
    url: 'https://www.behance.net/annagoesthere',
    position: 'designer',
  },
  {
    id: 12,
    name: '루키',
    description: '편리함을 추구하는 게으름뱅이 개발자',
    image: Rookie,
    url: 'https://github.com/RookieAND',
    position: 'developer',
  },
]
