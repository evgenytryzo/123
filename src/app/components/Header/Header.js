'use client'
import S from './Header.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Menu from '../Menu'
import BurgerMenu from '../BurgerMenu'
import mars from '../../../../public/mars.svg'
import linkName from '@/app/utils/variables'

const Header = ({ inOpen }) => {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className={S.header}>
      <div className={S.logo}>
        <Image className={S.image} src={mars} alt='Mars logo' />
      </div>
      <menu className={S.menu}>
        {width !== null &&
          (width > 968 ? (
            <Menu inOpen={inOpen} links={linkName} />
          ) : (
            <BurgerMenu inOpen={inOpen} links={linkName} />
          ))}
      </menu>
    </section>
  )
}
export default Header
