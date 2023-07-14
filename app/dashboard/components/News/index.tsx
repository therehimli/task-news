'use client'

import { FC } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BiHide } from 'react-icons/bi'
import { BiShow } from 'react-icons/bi'

import styles from './news.module.scss'
import { INews } from '@/app/dashboard/page'

interface NewsProps {
  news: INews
  onDelete: any
  onToggle: any
}

const News: FC<NewsProps> = ({ news, onDelete, onToggle }) => {
  return (
    <div
      style={
        news.active
          ? { background: 'rgba(128, 128, 128, 0.078)' }
          : { background: 'grey' }
      }
      className={styles.wrapper}
    >
      <h2 className={styles.title}>{news.title}</h2>
      <p className={styles.description}>{news.description}</p>
      <div className={styles.edit}>
        <AiFillDelete
          onClick={() => onDelete(news.id)}
          size={20}
          cursor="pointer"
        />
        {news.active ? (
          <BiShow
            onClick={() => onToggle(news.id, false)}
            size={20}
            cursor="pointer"
          />
        ) : (
          <BiHide
            onClick={() => onToggle(news.id, true)}
            size={20}
            cursor="pointer"
          />
        )}
      </div>
    </div>
  )
}

export default News
