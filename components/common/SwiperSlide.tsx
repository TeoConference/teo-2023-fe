import React from 'react'
import clsx from 'clsx'

interface SwiperSlideProps {
  children: React.ReactNode
  className?: string
}

const SwiperSlide = ({ children, className }: SwiperSlideProps) => {
  return <ul className={clsx('animate-moveLeft ', className)}>{children}</ul>
}

export default SwiperSlide
