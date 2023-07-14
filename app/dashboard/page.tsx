'use client'

import News from './components/News'
import CreateNews from './components/CreateNews'
import styles from './dashboard.module.scss'
import useLocalStorage from '../hooks/useLocalStorage'

export interface INews {
  title: string
  description: string
  active: boolean
  id: string
}

export default function Dashboard() {
  const [news, setNews] = useLocalStorage('news', [])

  const onDeleteHandler = (id: string) => {
    setNews(news.filter((item: INews) => item.id !== id))
  }

  const onToggleHandler = (_id: string, active: boolean) => {
    setNews(
      news.map((item: INews) => (item.id === _id ? { ...item, active } : item))
    )
  }

  return (
    <main>
      <CreateNews news={news} setNews={setNews} />
      <div className={styles.newsWrapper}>
        {news.map((item: INews) => (
          <News
            onToggle={onToggleHandler}
            onDelete={onDeleteHandler}
            key={item.id}
            news={item}
          />
        ))}
      </div>
    </main>
  )
}
