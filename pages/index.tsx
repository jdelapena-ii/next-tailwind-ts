/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'

import { Navbar } from '../components/navbar'
import HeroSection from '../components/hero'
import Footer from '../components/footer'
import Services from '../components/services'
import Skills from '../components/skills'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Jedo | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

