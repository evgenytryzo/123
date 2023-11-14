import Image from 'next/image'
import smoke from '/public/smoke.svg'
import smoke2 from '/public/smoke2.svg'
import S from './Smoke.module.scss'

const Smoke = () => (
  <>
    <Image
      src={smoke}
      alt='Smoke'
      className={S.smoke + ' ' + S.firstSmoke}
    ></Image>
    <Image
      src={smoke2}
      alt='Smoke'
      className={S.smoke + ' ' + S.lastSmoke}
    ></Image>
  </>
)

export default Smoke
