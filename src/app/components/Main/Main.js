'use client'
import S from './Main.module.scss'
import Line from '../Line'
import Direction from '../Direction'
import PrimeText from '../PrimeText'
const Main = () => (
  <section className={S.container}>
    <div className={S.lineContainer}>
      <Line />
    </div>
    <div className={S.direction}>
      <Direction text='Точка назначения:' />
    </div>
    <div className={S.primeText}>
      <PrimeText text='Марс' />
    </div>
  </section>
)

export default Main
