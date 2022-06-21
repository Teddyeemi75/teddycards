// pages/index.js

import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function accueil() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Bienvenue
        </h2>
        <div className={styles.grid}>
          <Link href="/accueil" >
            <a className={styles.card}>
            <h2>Accueil &rarr;</h2>
            </a>
          </Link>
          <Link href="/collectioncarte" >
          <a className={styles.card}>
            <h2>Collection &rarr;</h2>
            </a>
          </Link>
          <Link
            href="/contact"
            
          >
            <a className={styles.card}>
            <h2>Contact &rarr;</h2>
            </a>
          </Link>
          </div>
      </main>
    </div>
  )
}
