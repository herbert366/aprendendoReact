import styles from '../styles/Home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>início | ig.news</title>
      </Head>
      <h1 className={styles.title}>
        Hello <span>come</span>
      </h1>
    </>
  )
}
