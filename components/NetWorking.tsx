import React from 'react'

const Networking = () => (
  <div className="flex flex-col space-y-20 items-center justify-start py-[180px]">
    <div className="flex flex-col space-y-12 items-center justify-start">
      <div
        className="flex flex-col space-y-4 items-center justify-start"
        style={{ width: 747, height: 111 }}
      >
        <p className="text-5xl font-bold leading-10 text-center">네트워킹</p>
        <p className="text-2xl font-bold leading-10 text-center">
          명함 굿즈를 통해서 자연스럽게 좋은 사람들을 찾고 연락처를
          공유해보세요!
        </p>
      </div>
    </div>

    <div
      className="inline-flex space-x-5 items-start justify-start"
      style={{ width: 1360, height: 524 }}
    >
      <div
        className="inline-flex flex-col space-y-8 items-start justify-start"
        style={{ width: 440, height: 524 }}
      >
        <div
          className="bg-gray-100 rounded-lg"
          style={{ width: 440, height: 380 }}
        />
        <div className="flex flex-col space-y-4 items-start justify-start">
          <div className="flex flex-col space-y-1.5 items-start justify-start">
            <p className="text-2xl font-bold leading-10 text-gray-900">
              개발자가 되고 싶어요!
            </p>
            <p className="text-base font-bold leading-normal text-center text-gray-900">
              취준생을 위한 네트워킹
            </p>
          </div>
          <div className="inline-flex space-x-2 items-center justify-center">
            <div className="inline-flex flex-col items-start justify-start px-3.5 py-0.5 bg-green-200 rounded">
              <p className="text-xs leading-tight text-gray-900">#취업</p>
            </div>
            <div className="inline-flex flex-col items-start justify-start px-3.5 py-0.5 bg-green-200 rounded">
              <p className="text-xs leading-tight text-gray-900">#개발입문</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="inline-flex flex-col space-y-8 items-start justify-start"
        style={{ width: 440, height: 524 }}
      >
        <div
          className="bg-gray-100 rounded-lg"
          style={{ width: 440, height: 380 }}
        />
        <div className="flex flex-col space-y-4 items-start justify-start">
          <div className="flex flex-col space-y-1.5 items-start justify-start">
            <p className="text-2xl font-bold leading-10 text-gray-900">
              성장하고 싶어요!
            </p>
            <p className="text-base font-bold leading-normal text-center text-gray-900">
              신입과 주니어를 위한 네트워킹
            </p>
          </div>
          <div className="inline-flex space-x-2 items-start justify-start">
            <div className="inline-flex flex-col items-center justify-center px-3.5 py-0.5 bg-purple-200 rounded">
              <p className="text-xs leading-tight text-gray-900">#회사문화</p>
            </div>
            <div className="inline-flex flex-col items-start justify-start px-3.5 py-0.5 bg-purple-200 rounded">
              <p className="text-xs leading-tight text-gray-900">#자기계발</p>
            </div>
            <div className="inline-flex flex-col items-start justify-start px-3.5 py-0.5 bg-purple-200 rounded">
              <p className="text-xs leading-tight text-gray-900">#성장</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="inline-flex flex-col space-y-8 items-start justify-start"
        style={{ width: 440, height: 524 }}
      >
        <div
          className="bg-gray-100 rounded-lg"
          style={{ width: 440, height: 380 }}
        />
        <div className="flex flex-col space-y-4 items-start justify-start">
          <div className="flex flex-col space-y-1.5 items-start justify-start">
            <p className="text-2xl font-bold leading-10 text-gray-900">
              함께하고 싶어요!
            </p>
            <p className="text-base font-bold leading-normal text-center text-gray-900">
              스터디와 사이드 프로젝트 팀원이 필요하다면?
            </p>
          </div>
          <div className="inline-flex space-x-2 items-center justify-center">
            <div className="inline-flex flex-col items-start justify-start px-3.5 py-0.5 bg-blue-300 rounded">
              <p className="text-xs leading-tight text-gray-900">#행사기획</p>
            </div>
            <div className="inline-flex flex-col items-start justify-start px-3.5 py-0.5 bg-blue-300 rounded">
              <p className="text-xs leading-tight text-gray-900">#외부활동</p>
            </div>
            <div className="inline-flex flex-col items-start justify-start px-3.5 py-0.5 bg-blue-300 rounded">
              <p className="text-xs leading-tight text-gray-900">#경험공유</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Networking
