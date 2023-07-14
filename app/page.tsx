'use client'

import styles from './page.module.css'
import News from './components/News'
import { INews } from './dashboard/page'
import { useEffect, useState } from 'react'

export default function Home() {
  const [news, setNews] = useState<INews[]>([])

  JSON.parse(window.localStorage.getItem('news') || '')

  return (
    <main className={styles.wrapper}>
      {news.map((item: INews) => (
        <News key={item.id} news={item} />
      ))}
    </main>
  )
}
