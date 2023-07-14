'use client'

import styles from './page.module.css'
import News from './components/News'
import { INews } from './dashboard/page'

export default function Home() {
  const news = JSON.parse(window.localStorage.getItem('news') || '')

  return (
    <main className={styles.wrapper}>
      {news.map((item: INews) => (
        <News key={item.id} news={item} />
      ))}
    </main>
  )
}
