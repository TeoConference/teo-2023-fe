import React from 'react'

const Map = () => (
  <div className="w-[100%] inline-flex flex-col items-center justify-center px-2.5 py-28 bg-gray-900">
    <div
      className="flex flex-col space-y-20 items-center justify-start"
      style={{ width: 1024, height: 689 }}
    >
      <div
        className="flex flex-col space-y-4 items-center justify-center"
        style={{ width: 507, height: 111 }}
      >
        <div
          className="inline-flex space-x-4 items-start justify-start"
          style={{ width: 493, height: 56 }}
        >
          <p className="text-5xl font-bold leading-10 text-center text-white">
            5월 20일
          </p>
          <p className="text-5xl font-bold leading-10 text-center text-green-500">
            여기서 만나요!
          </p>
        </div>
        <p className="text-2xl font-bold leading-10 text-center text-white">
          신촌역 3번출구에서 300M 내에 위치하고 있습니다!
        </p>
      </div>
      <img
        alt=""
        className="rounded-lg"
        style={{ width: 1024, height: 500 }}
        src="https://via.placeholder.com/1024x500"
      />
    </div>
  </div>
)

export default Map
