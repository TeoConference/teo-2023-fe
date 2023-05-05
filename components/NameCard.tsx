import React from 'react'

const NameCard = () => (
  <section
    id="content3"
    className="content flex flex-col items-center gap-6 desktop:gap-12 pt-8 pb-12 tablet:pb-16 tablet:px-20 desktop:px-40 px-4"
  >
    <div className="flex flex-col space-y-8 items-center w-full">
      <div className="flex flex-col space-y-10 items-center">
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-mobile-h1 tablet:text-h1 text-center">명함 굿즈</p>
          <p className="text-mobile-h2 tablet:text-h3 text-center">
            참가자 전원에게 명함 굿즈를 제공합니다.
          </p>
        </div>
      </div>
      <div className="bg-name-card max-w-[1300px] bg-cover rounded-lg h-[250px] tablet:h-[280px] desktop:h-[367px] w-full" />
    </div>
  </section>
)

export default NameCard
