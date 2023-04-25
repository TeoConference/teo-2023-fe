import React from 'react'

const Footer = () => (
  <footer className="w-full h-[310px] py-[90px] bg-gray-100 px-8">
    <div className="max-w-[1360px] mx-auto">
      <p className="text-base font-bold leading-normal text-gray-500">
        ⓒ TEOCONF. All Right Reserved.
      </p>

      <div className="flex justify-between">
        <div className="inline-flex space-x-9 items-center justify-end">
          <p className="text-base font-bold leading-normal text-gray-500">
            서비스 이용약관
          </p>
          <p className="text-base font-bold leading-normal text-gray-500">
            개인정보 처리방침
          </p>
          <p className="text-base font-bold leading-normal text-gray-500">
            후원 문의
          </p>
        </div>

        <div className="inline-flex space-x-2 items-start justify-start">
          <img
            alt=""
            className="w-6 h-full rounded-lg"
            src="https://via.placeholder.com/26x26"
          />
          <img
            alt=""
            className="w-6 h-full rounded-lg"
            src="https://via.placeholder.com/26x26"
          />
          <img
            alt=""
            className="w-6 h-full rounded-lg"
            src="https://via.placeholder.com/26x26"
          />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
