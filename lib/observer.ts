import { useEffect, useRef } from 'react'

const useIntersectionObservation = (setActiveId: any) => {
  const contentRef = useRef<any>({})

  useEffect(() => {
    const callback = (observedContent: any) => {
      observedContent.forEach((content: any) => {
        contentRef.current[content.target.id] = content
      })

      const visibleContent: any = Object.values(contentRef.current).filter(
        (content: any) => content.isIntersecting
      )

      setActiveId(visibleContent[0]?.target.id)
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
