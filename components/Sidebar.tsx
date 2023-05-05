import { KeyboardArrowDown, KeyboardArrowUp, Square } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'

interface SidebarProps {
  currentId: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SIDEBAR_ITEMS = {
  CONTENTS: [
    { name: '프로그램', link: '#content1', id: 'content1' },
    { name: '네트워킹', link: '#content2', id: 'content2' },
    { name: '명함', link: '#content3', id: 'content3' },
    { name: '후원사', link: '#content4', id: 'content4' },
    { name: '장소', link: '#content5', id: 'content5' },
    { name: 'FAQ', link: '#content6', id: 'content6' },
  ],
  SUB_CONTENTS: [
    { name: '자주 묻는 질문', link: '#sub1' },
    { name: '행동강령', link: '#sub2' },
  ],
}

const Sidebar = (props: SidebarProps) => {
  const { currentId, isOpen, setIsOpen } = props
  const [isArrowOpen, setIsArrowOpen] = useState(false)
  const mount = useRef(false)

  // herf action to close sidebar
  useEffect(() => {
    const handleClick = () => {
      setIsOpen(false)
    }
    if (mount) {
      console.log('here')
      // document.body.style.cssText = `overflow: hidden`
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener('click', handleClick)
      })
    }
    return () => {
      console.log('unmount')
      // document.body.style.cssText = 'overflow: unset;'
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [isOpen, setIsOpen])

  useEffect(() => {
    mount.current = true
  }, [])

  return (
    <div className={`${isOpen ? `toggleOn` : `hidden`}`}>
      <div className="flex flex-col items-center pt-20 h-full">
        {SIDEBAR_ITEMS.CONTENTS.map((item, idx) => {
          if (idx < 5) {
            return (
              <div
                key={idx}
                className="w-[90%] tablet:w-[85%] py-4 tablet:py-5 border-b-[0.5px] flex"
              >
                <a href={item.link} className="flex items-center">
                  {currentId === item.id ? (
                    <Square className="fill-[#00DE4F]" />
                  ) : (
                    <Square className="fill-[#E8E8E8]" />
                  )}
                </a>
                &nbsp;{item.name}
              </div>
            )
          } else {
            return (
              <div
                key={idx}
                className="w-[90%] tablet:w-[85%] py-4 tablet:py-5 border-b-[0.5px] flex justify-between"
              >
                <div className="flex-center">
                  <a href={item.link} className="flex items-center">
                    {currentId === item.id ? (
                      <Square className="fill-[#00DE4F]" />
                    ) : (
                      <Square className="fill-[#E8E8E8]" />
                    )}
                  </a>
                  &nbsp;{item.name}
                </div>
                <div
                  className="flex-center"
                  onClick={() => setIsArrowOpen((prev) => !prev)}
                >
                  {isArrowOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </div>
              </div>
            )
          }
        })}
        <div
          className={`${
            isArrowOpen ? 'block' : 'hidden'
          } text-[1.25rem] tablet:text-[1.625rem] space-y-4 w-[90%] tablet:w-[85%]`}
        >
          {SIDEBAR_ITEMS.SUB_CONTENTS.map((item, idx) => {
            return (
              <div key={idx} className={`${idx === 0 ? 'pt-6' : ''}`}>
                <Square className="invisible" />
                &nbsp;
                <a href={item.link}>{item.name}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
