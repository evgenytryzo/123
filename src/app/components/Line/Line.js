import S from './Line.module.scss'
import Image from 'next/image'
import line from '../../../../public/line.svg'
import LowerCircle from '../../../../public/LowerCircle.svg'
import UpperCircle from '../../../../public/UpperCircle.svg'

const Line = () => (
  <div className={S.container}>
    <Image src={UpperCircle} alt='Upper circle' className={S.upperCircle} />
    <Image src={line} alt='Line' className={S.line} />
    <Image src={LowerCircle} alt='Lower circle' className={S.lowerCircle} />
  </div>
)

export default Line
