import S from './PrimeText.module.scss'
import videoMars from './marsVideo.m4v'

const PrimeText = ({ text }) => (
  <div className={S.container}>
    <h1 className={S.text}>{text}</h1>
    <div className={S.overlay}>
      <video
        className={S.video}
        src={videoMars}
        alt='Video Mars'
        autoPlay
        muted
        loop
      ></video>
    </div>
  </div>
)

export default PrimeText
