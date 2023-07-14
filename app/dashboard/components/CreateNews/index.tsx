'use client'

import { ChangeEvent, FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './createNews.module.scss'
import { INews } from '@/app/dashboard/page'

interface CreateNewsProps {
  news: INews[]
  setNews: any
}

const CreateNews: FC<CreateNewsProps> = ({ setNews, news }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    setNews([...news, { title, description, active: true, id: uuidv4() }])

    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={onSubmit} className={styles.wrapper}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Заголовок..."
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Описание..."
      />
      <button type="submit" className={styles.button}>
        Добавить
      </button>
    </form>
  )
}

export default CreateNews
