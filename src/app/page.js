'use client'
import S from './page.module.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Popup from './components/Popup'
import Background from './components/Background'
import Smoke from './components/Smoke'

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false)

  const handleOpenPopup = () =>
    !openPopup ? setOpenPopup(true) : setOpenPopup(false)

  return (
    <section className={S.page}>
      <Background />
      <div className={S.content}>
        <Header inOpen={handleOpenPopup} />
        <Main />
        <Smoke />
      </div>
      {openPopup && <Popup handleOpenPopup={handleOpenPopup} />}
    </section>
  )
}
