import Image from 'next/image'

import Logo from '../public/images/Logo.png'
import Instagram from '@/public/images/Instagram.svg'
import LinkedIn from '@/public/images/LinkedIn.svg'
import Twitter from '@/public/images/Twitter.svg'
import UpArrow from '@/public/images/UpArrow.svg'

const Footer = () => (
  <footer className="relative bg-gray-100 px-6 py-10 tablet:px-24 tablet:py-20">
    <div className="max-w-[1360px] mx-auto">
      <Image alt="logo" src={Logo} width={150} height={25.96} />
      <p className="text-sub-h2 text-gray-400 mt-4 pb-8 border-b">
        ⓒ TEOCON. All Right Reserved.
      </p>
      <div className="tablet:flex items-center justify-between">
        <button
          type="button"
          className="text-mobile-h2 tablet:text-sub-h2 text-gray-400 mt-8"
        >
          개인정보 처리방침
        </button>
        <div className="flex gap-2 mt-6">
          <a
            href="https://www.linkedin.com/company/teocon-2023"
            target="_blank"
          >
            <Image
              src={LinkedIn}
              alt="linkedin 바로가기"
              width={26}
              height={26}
            />
          </a>
          <a href="https://twitter.com/TEOCON_2023" target="_blank">
            <Image
              src={Twitter}
              alt="twitter 바로가기"
              width={26}
              height={26}
            />
          </a>
          <a href="https://www.instagram.com/teo_conf/" target="_blank">
            <Image
              src={Instagram}
              alt="instagram 바로가기"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </div>
    <button type="button">
      <Image
        src={UpArrow}
        alt="맨 위로 가기"
        className="absolute bottom-12 right-6 tablet:-top-4 tablet:right-24"
      />
    </button>
  </footer>
)

export default Footer
