import React from 'react'

const Staff = () => (
  <section className="flex flex-col space-y-20 items-center justify-start py-36">
    <div
      className="flex flex-col space-y-4 items-center justify-start"
      style={{ width: 539, height: 111 }}
    >
      <div
        className="inline-flex space-x-2.5 items-start justify-start"
        style={{ width: 539, height: 56 }}
      >
        <p className="text-5xl font-bold leading-10 text-center">
          테오콘을 만들어가는
        </p>
        <p className="text-5xl font-bold leading-10 text-center text-green-500">
          사람들
        </p>
      </div>
      <p className="text-2xl font-bold leading-10 text-center text-gray-900">
        테오콘을 함께 만든 스태프를 소개합니다!
      </p>
    </div>
    <div className="inline-flex space-x-5 items-start justify-start">
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="inline-flex flex-col items-start justify-start"
        >
          <img
            alt=""
            className="w-full h-64 rounded-tl-lg rounded-tr-lg"
            src="https://via.placeholder.com/325x250"
          />
          <div className="flex flex-col space-y-1 items-start justify-center w-full h-28 px-8 bg-gray-900 rounded-bl-lg rounded-br-lg">
            <div className="flex space-x-52 items-center justify-start">
              <p className="text-xl font-bold leading-9 text-green-500">주니</p>
              <img
                alt=""
                className="w-6 h-6 rounded-lg"
                src="https://via.placeholder.com/24x24"
              />
            </div>
            <p className="text-base leading-normal text-center text-white">
              #성장하는 디자이너
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Staff
