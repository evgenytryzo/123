import S from './BurgerMenu.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import menuIcon from '/public/menuIcon.svg'
import LinksItem from '../LinksItem'

const BurgerMenu = ({ inOpen, links }) => {
  const [toggleOpenMenu, setToggleOpenMenu] = useState(false)
  const toggleMenu = () =>
    !toggleOpenMenu ? setToggleOpenMenu(true) : setToggleOpenMenu(false)

  return (
    <>
      <button className={S.menuButton}>
        <Image
          onClick={toggleMenu}
          src={menuIcon}
          alt='menu'
          className={S.image}
        />
      </button>
      {toggleOpenMenu && (
        <div className={S.container}>
          <LinksItem inOpen={inOpen} links={links} />
        </div>
      )}
    </>
  )
}

export default BurgerMenu
