'use client'

import S from './Background.module.scss'
import { useState, useEffect } from 'react'

const Background = () => {
  const [backgroundPosition, setBackgroundPosition] = useState('center')

  useEffect(() => {
    const setPosition = e => {
      const x = e.clientX
      const width = window.innerWidth

      if (x < width / 3) {
        setBackgroundPosition('backgroundLeft')
      } else if (x < (2 * width) / 3) {
        setBackgroundPosition('center')
      } else {
        setBackgroundPosition('backgroundRight')
      }
    }

    document.addEventListener('mousemove', setPosition)
    return () => document.removeEventListener('mousemove', setPosition)
  }, [])

  return <div className={`${S.background} ${S[backgroundPosition]}`}></div>
}

export default Background
