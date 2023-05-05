import { Dispatch, SetStateAction } from 'react'

// const observerOption = {
//   threshold: [0, 0.5, 1],
//   rootMargin: '-30% -40%',
// }

// export const getIntersectionObserver = (
//   setState: Dispatch<SetStateAction<string>>
// ) => {
let direction = ''
let prevYposition = 0

// scroll 방향 check function
const checkScrollDirection = (prevY: number) => {
  if (window.scrollY === 0 && prevY === 0) return
  else if (window.scrollY > prevY) direction = 'down'
  else direction = 'up'

  prevYposition = window.scrollY
}

//   // observer
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       checkScrollDirection(prevYposition)

//       if (
//         (direction === 'down' && !entry.isIntersecting) ||
//         (direction === 'up' && entry.isIntersecting)
//       ) {
//         setState(entry.target.id)
//       }
//     })
//   }, observerOption)

//   return observer
// }
import { useEffect, useRef } from 'react'

const useIntersectionObservation = (setActiveId: any, currentId: any) => {
  const contentRef = useRef<any>({})

  useEffect(() => {
    const callback = (observedContent: any) => {
      observedContent.forEach((content: any) => {
        contentRef.current[content.target.id] = content
      })

      const visibleContent: any = Object.values(contentRef.current).filter(
        (content: any) => content.isIntersecting
      )
      checkScrollDirection(prevYposition)
      setActiveId((prev: any) => {
        if (prev === 'content6' && direction === 'down') {
          return 'content6'
        } else {
          return visibleContent[0]?.target.id
        }
      })
    }
    //1. 새로운 observer 설정
    const observer = new IntersectionObserver(callback, {
      rootMargin: '-30% -40%',
      threshold: [0, 0.5, 1],
    })

    //2. DOM 요소 찾고 Observer달아주기
    const contents: any = [...document.querySelectorAll('.content')]

    contents.forEach((content: any) => observer.observe(content))

    //3. 언 마운트시 옵저버 해제
    return () => observer.disconnect()
  }, [setActiveId])
}

export default useIntersectionObservation
