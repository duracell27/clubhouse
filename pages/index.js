import Head from 'next/head'
import {WelcomeStep} from '../components/steps/WelcomeStep'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Main page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WelcomeStep/>
    </div>
  )
}
