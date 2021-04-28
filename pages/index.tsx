/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'
import { useColorMode } from '@chakra-ui/react'

import { Navbar } from '../components/navbar'
import HeroSection from '../components/hero'
import Footer from '../components/footer'
import Services from '../components/services'
import Skills from '../components/skills'
import Projects from '../components/projects'
import About from '../components/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Jedo | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
      {/* <HeroSection />
      <Services />
      <Skills />
      <Projects />
      <Footer /> */}
    </div>
  )
}

