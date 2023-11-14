import Image from 'next/image'
import S from './Popup.module.scss'
import close from '/public/close.svg'
import { useRef, useState, useEffect } from 'react'
import dayjs from 'dayjs'

const Popup = ({ handleOpenPopup }) => {
  const numberInput = useRef()
  const [minDate, setMinDate] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  useEffect(() => {
    const now = dayjs().format('YYYY-MM-DD')
    setMinDate(now)
    setDateFrom(now)
    setDateTo(now)
  }, [])

  const handleSubmit = e => {
    if (!numberInput.current.validity.valid) {
      console.log('Поле заполнено некорректно')
      return
    }
    handleOpenPopup(false)
    e.preventDefault()
  }

  return (
    <section className={S.popup}>
      <div className={S.headerContainer}>
        <h2 className={S.text}>Бронирование билетов</h2>
        <Image
          onClick={handleOpenPopup}
          className={S.close}
          src={close}
          alt='close'
        />
      </div>
      <form className={S.form}>
        <div className={S.inputContainer}>
          <div className={S.inputItem}>
            <label className={S.label}>Дата заезда </label>
            <input
              className={S.input}
              placeholder='123'
              type='date'
              required
              min={minDate}
              value={dateFrom}
              onChange={e => {
                const selectedDate = e.target.value
                setDateFrom(selectedDate)
                if (dayjs(selectedDate).isAfter(dayjs(dateTo))) {
                  setDateTo(selectedDate)
                }
              }}
            ></input>
          </div>
          <div className={S.inputItem}>
            <label className={S.label}>Дата выезда</label>
            <input
              className={S.input}
              type='date'
              required
              min={minDate}
              value={dateTo}
              onChange={e => {
                const selectedDate = e.target.value
                setDateTo(selectedDate)
                if (!dayjs(selectedDate).isAfter(dayjs(dateFrom))) {
                  setDateFrom(selectedDate)
                }
              }}
            ></input>
          </div>
          <div className={S.inputItem}>
            <label className={S.label}>Количество</label>
            <input
              className={S.input}
              placeholder='1 человек'
              type='number'
              min='1'
              max='30'
              required
              ref={numberInput}
            ></input>
          </div>
        </div>
        <button
          className={S.buttonBuyTickets}
          type='submit'
          onClick={handleSubmit}
        >
          Купить билеты
        </button>
      </form>
    </section>
  )
}

export default Popup
