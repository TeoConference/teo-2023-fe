import React from 'react'

const FAQ = () => (
  <section>
    <div className="flex flex-col space-y-16 items-center justify-start max-w-[1024px] mx-auto px-8 py-36">
      <div className="flex flex-col space-y-8 items-center justify-start">
        <p className="text-5xl font-bold leading-10 text-center">
          자주 묻는 질문
        </p>
        <div className="inline-flex space-x-16 items-start justify-start">
          <p className="text-2xl font-bold leading-10 text-center text-gray-900">
            참가신청
          </p>
          <p className="text-2xl font-bold leading-10 text-center text-gray-900">
            현장당일
          </p>
          <p className="text-2xl font-bold leading-10 text-center text-green-500">
            행사/세션
          </p>
          <p className="text-2xl font-bold leading-10 text-center text-gray-900">
            기타
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-5 items-start justify-start">
        <div className="inline-flex space-x-2.5 items-center justify-start px-8 py-5 bg-gray-50 rounded-lg">
          <p className="text-xl font-bold leading-9 text-gray-900">
            Q. 발표 시간보다 늦게 도착할 것 같습니다. 괜찮을까요?
          </p>
          <img
            alt=""
            className="transform rotate-180 w-6 h-6 rounded-lg"
            src="https://via.placeholder.com/24x24"
          />
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-start px-8 pt-5 pb-20 bg-gray-50 rounded-lg">
          <p className="text-xl font-bold leading-9 text-gray-900">
            Q. 발표 시간보다 늦게 도착할 것 같습니다. 괜찮을까요?
          </p>
          <img
            alt=""
            className="w-6 h-6 rounded-lg"
            src="https://via.placeholder.com/24x24"
          />
          <p className="text-base leading-normal text-gray-900">
            네, 늦게 오셔도 등록 데스크에서 등록 확인 후 입장하실 수 있습니다.
          </p>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-start px-8 py-5 bg-gray-50 rounded-lg">
          <p className="text-xl font-bold leading-9 text-gray-900">
            Q. 발표 시간보다 늦게 도착할 것 같습니다. 괜찮을까요?
          </p>
          <img
            alt=""
            className="transform rotate-180 w-6 h-6 rounded-lg"
            src="https://via.placeholder.com/24x24"
          />
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-start px-8 py-5 bg-gray-50 rounded-lg">
          <p className="text-xl font-bold leading-9 text-gray-900">
            Q. 당일 현장 등록할 수 있나요?
          </p>
          <img
            alt=""
            className="transform rotate-180 w-6 h-6 rounded-lg"
            src="https://via.placeholder.com/24x24"
          />
        </div>
      </div>
    </div>
  </section>
)

export default FAQ
