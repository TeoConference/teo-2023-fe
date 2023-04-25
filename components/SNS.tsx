import React from 'react'

const SNS = () => (
  <div className="w-[100%] inline-flex flex-col items-center justify-center px-2.5 py-28 bg-gray-900">
    <div className="flex flex-col space-y-16 items-center justify-start max-w-[658px] mx-auto">
      <p className="text-5xl font-bold leading-10 text-center text-white">
        테오콘 소식을 더 빨리 알고 싶다면
      </p>
      <div className="inline-flex space-x-5 items-start justify-start">
        <div className="flex items-start justify-start p-4 bg-white rounded-lg">
          <img
            alt=""
            className="flex-1 h-full rounded-lg"
            src="https://via.placeholder.com/34x34"
          />
        </div>
        <div className="flex items-start justify-start p-4 bg-white rounded-lg">
          <img
            alt=""
            className="flex-1 h-full rounded-lg"
            src="https://via.placeholder.com/34x34"
          />
        </div>
        <div className="flex items-start justify-start p-4 bg-white rounded-lg">
          <img
            alt=""
            className="flex-1 h-full rounded-lg"
            src="https://via.placeholder.com/34x34"
          />
        </div>
      </div>
    </div>
  </div>
)

export default SNS
