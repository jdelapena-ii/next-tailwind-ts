/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <div style={ {zIndex: -1} }
        className="fixed w-screen overflow-hidden h-5/6">
          <Image
            alt="computer-bg"
            src="/computer-hero.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <p className="m-0 text-2xl leading-10 text-center pt-14">
          Image Component
          <br />
          as a Background
        </p>
      </main>

      <footer className="flex justify-center m-12 pt-72" id="skills">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="object-scale-down" />
        </a>
      </footer>
    </div>
  )
}
