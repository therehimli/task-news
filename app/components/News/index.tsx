'use client'

import { FC, useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import styles from './news.module.css'
import { INews } from '@/app/dashboard/page'

interface NewsProps {
  news: INews
}

const News: FC<NewsProps> = ({ news }) => {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <div
        style={news.active ? { display: 'block' } : { display: 'none' }}
        key={news.id}
        className={styles.news}
      >
        <h2 className={styles.title}>{news.title}</h2>
        <div className={styles.description}>
          <p className={`${expand ? styles.open : styles.descriptionText}`}>
            {news.description}
          </p>
        </div>
        <div className={styles.expand}>
          <MdExpandMore onClick={() => setExpand(!expand)} cursor="pointer" />
        </div>
      </div>
    </>
  )
}

export default News
