import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Main from '../../components/Main.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hey Collection</h1>
    </div>
  )
}
