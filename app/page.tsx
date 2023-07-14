'use client'

import styles from './page.module.css'
import News from './components/News'
import { INews } from './dashboard/page'
import useLocalStorage from './hooks/useLocalStorage'

export default function Home() {
  const [news, setNews] = useLocalStorage('news', '')

  return (
    <main className={styles.wrapper}>
      {news && news.map((item: INews) => <News key={item.id} news={item} />)}
    </main>
  )
}
