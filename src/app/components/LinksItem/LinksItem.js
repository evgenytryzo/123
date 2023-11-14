import Link from 'next/link'
import S from './LinksItem.module.scss'

const LinksItem = ({ inOpen, links }) => {
  return (
    <>
      {links.map((item, index) => {
        return (
          <Link className={S.menuItem} href={item.link} key={index}>
            {item.name}
          </Link>
        )
      })}
      <button onClick={inOpen} className={S.button}>
        Купить билеты
      </button>
    </>
  )
}

export default LinksItem
