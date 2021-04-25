import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
    const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-wrap items-center p-1 px-3 bg-green-400'>
        <Link href='/'>
          <a className='inline-flex items-center mr-4'>
            {/* <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8 mr-2 text-white fill-current'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className='w-12 h-12 m-2 text-white fill-current'
            >
              <path d="M504.485 496.971H455.89v-297.08a7.515 7.515 0 00-7.515-7.515h-80.156a7.515 7.515 0 00-7.515 7.515v297.08h-57.111V288.063a7.515 7.515 0 00-7.515-7.515h-80.156a7.515 7.515 0 00-7.515 7.515v208.908h-57.111v-168.83a7.515 7.515 0 00-7.515-7.515H63.625a7.515 7.515 0 00-7.515 7.515V496.97H7.515a7.515 7.515 0 100 15.03h496.97a7.515 7.515 0 100-15.029zm-368.219 0H71.139V335.656h65.127v161.315zm152.298 0h-65.127V295.578h65.127v201.393zm152.297 0h-65.127V207.406h65.127v289.565zM488.008 5.895A23.535 23.535 0 00469.502.183l-64.125 8.016c-12.73 1.591-22.036 13.54-20.443 26.283 1.609 12.877 13.39 22.054 26.284 20.444l5.232-.653c-78.705 91.256-172.272 138.418-238.39 162.12-82.441 29.555-146.608 32.083-147.233 32.104-12.963.405-23.191 11.282-22.799 24.247.388 12.804 10.721 22.833 23.526 22.833.238 0 .477-.003.722-.011 2.853-.086 70.874-2.488 160.489-34.42 50.378-17.952 97.782-41.783 140.893-70.83a7.513 7.513 0 002.032-10.431 7.513 7.513 0 00-10.431-2.033c-42.068 28.346-88.343 51.607-137.539 69.137-87.413 31.147-153.145 33.471-155.894 33.554l-.272.004a8.472 8.472 0 01-8.504-8.258c-.142-4.69 3.558-8.624 8.25-8.771.656-.021 66.654-2.443 151.832-32.978 71.359-25.581 173.893-77.814 257.126-181.378 4.144-5.156-.237-12.985-6.788-12.164l-24.112 3.014c-4.18.517-8.24-2.222-9.301-6.304-1.276-4.912 2.156-9.968 7.186-10.598l64.127-8.016c5.007-.633 9.571 3.414 9.571 8.451V87.67c0 4.696-3.82 8.517-8.517 8.517s-8.517-3.82-8.517-8.517V68.23c0-3.071-1.986-5.943-4.858-7.028-2.967-1.121-6.473-.18-8.479 2.276-28.067 34.391-60.025 65.511-94.988 92.495a7.516 7.516 0 009.183 11.899c30.455-23.505 58.685-50.066 84.137-79.141.556 12.493 10.894 22.487 23.523 22.487 12.983 0 23.546-10.563 23.546-23.546V23.547a23.562 23.562 0 00-7.963-17.652z"></path>
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
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
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
    </>
    )
}