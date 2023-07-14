import Link from 'next/link'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/dashboard">
        Admin
      </Link>
    </header>
  )
}

export default Header
