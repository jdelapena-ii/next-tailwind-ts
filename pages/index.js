/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Header */}
        <nav className="sticky top-0 z-20 bg-white shadow">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center flex-shrink-0 text-gray-600 transition duration-150 ease-in-out rounded-full hover:text-teal-700 focus:text-teal-700">
                  <div className="h-10 fill-current">
                      <svg
                      className="w-auto h-10 transition duration-150 ease-in-out"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:ml-6 sm:flex">
                <ul className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:shadow-none focus:text-gray-700 focus:border-gray-300">
                  <li className="px-4">Home</li>
                  <li className="px-4">Blog</li>
                  <li className="px-4">About</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        
      </main>

      <footer className="flex justify-center m-12">
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
