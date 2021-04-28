import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
    const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    // <>
      <nav className='bg-green-400 w-96'>
        <Link href='/'>
          <a className='inline-flex items-center mr-4'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 ml-6"
              x="0"
              y="0"
              enableBackground="new 0 0 94.504 94.504"
              version="1.1"
              viewBox="0 0 94.504 94.504"
              xmlSpace="preserve"
            >
              <path d="M93.918 45.833L69.799 21.714c-.75-.75-2.077-.75-2.827 0l-5.229 5.229a2 2 0 000 2.828L79.22 47.246 61.744 64.724a2 2 0 000 2.828l5.229 5.229c.375.375.884.587 1.414.587.529 0 1.039-.212 1.414-.587l24.117-24.118a2.002 2.002 0 000-2.83zM32.759 64.724L15.285 47.248l17.477-17.475a1.999 1.999 0 000-2.828l-5.229-5.229a2 2 0 00-2.828 0L.585 45.833a2 2 0 000 2.829L24.704 72.78c.375.375.884.587 1.414.587.53 0 1.039-.212 1.414-.587l5.229-5.229a1.997 1.997 0 00-.002-2.827zM60.967 13.6a2.001 2.001 0 00-1.19-.962l-4.239-1.251a2 2 0 00-2.484 1.352L33.375 79.382a2 2 0 001.351 2.484l4.239 1.251a1.996 1.996 0 002.484-1.352l19.679-66.644a1.995 1.995 0 00-.161-1.521z"></path>
            </svg>
          </a>
        </Link>
        <button
          className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-green-600 lg:hidden hover:text-white'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-screen sm:inline-flex sm:flex-grow sm:w-auto`}
        >
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/#services'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white '>
                Services
              </a>
            </Link>
            <Link href='/#skills'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'>
                Skills
              </a>
            </Link>
            <Link href='/#projects'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'>
                Projects
              </a>
            </Link>
          </div>
        </div>
      </nav>
    // </>
    )
}