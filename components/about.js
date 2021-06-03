import Image from 'next/image'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

import ReactIcon from '../icons/react';
import TypeScriptIcon from '../icons/typescript';

export default function About() {
    const { toggleColorMode } = useColorMode();
    return (
        <section className="justify-center max-w-4xl min-h-screen m-auto" id="about">
            <div className="items-center min-h-screen md:flex">
                <div className="w-auto h-auto m-4">
                    <Image
                        src="/jedo.jpg"
                        alt="Jedo Dels"
                        width={500}
                        height={500}
                        className="bg-gray-600 rounded-full shadow-lg"
                    />
                </div>
                <div className="flex-grow flex-shrink m-8">
                    <input className="absolute opacity-0" type="checkbox" id="chk" onClick={toggleColorMode} />
                    <label className="relative flex items-center justify-between w-16 h-8 p-1 transform bg-gray-900 cursor-pointer rounded-2xl" htmlFor="chk">
                        {/* moon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="301"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 0 256 301"
                            className="w-6 h-6"
                            >
                            <defs>
                                <linearGradient
                                id="linearGradient-1"
                                x1="2.178%"
                                x2="92.722%"
                                y1="34.794%"
                                y2="91.342%"
                                >
                                <stop offset="0%" stopColor="#41A7EF"></stop>
                                <stop offset="54.219%" stopColor="#813DDE"></stop>
                                <stop offset="74.499%" stopColor="#8F2EE2"></stop>
                                <stop offset="100%" stopColor="#A11CE6"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#linearGradient-1)"
                                d="M124.184 101.699c0-35.184 12.073-67.547 32.303-93.174 2.71-3.433.3-8.456-4.074-8.513-.637-.008-1.276-.012-1.915-.012C67.62 0 .39 66.99.002 149.775c-.388 82.594 66.427 150.42 149.018 151.213 40.865.393 78.017-15.504 105.357-41.593 3.143-2.999 1.465-8.313-2.828-8.975-72.135-11.129-127.365-73.471-127.365-148.721"
                            ></path>
                        </svg>
                        {/* sun */}
                        <svg 
                            className="w-6 h-6" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24"
                        >
                            <path
                                fill="#f39c12"
                                d="M12 1028.4l-4 4H3v5l-3 3 3 3v6h6l3 3 3-3h6v-6l3-3-3-3v-5h-5l-4-4z"
                                transform="translate(0 -1028.4)"
                            ></path>
                            <path
                                fill="#f1c40f"
                                d="M21 1040.336a9 9 0 11-18 0 9 9 0 0118 0z"
                                transform="translate(0 -1028.4)"
                            ></path>
                        </svg>
                        {/* ball */}
                        <div className="absolute inset-y-0 inset-x-0.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                version="1.1"
                                viewBox="0 0 11 11"
                                className="w-8 h-8 transform active:translate-x-6"
                            >
                                <path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path>
                            </svg>
                        </div>
                    </label>    
                    <h2 className="text-4xl">Hello 👋🏽</h2>
                    {/* <Button onClick={toggleColorMode}>Dark Mode</Button> */}
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                    necessitatibus, ducimus quas ea pariatur esse sequi iusto
                    repudiandae minus, harum quia, inventore aut officiis tempora
                    blanditiis quaerat explicabo optio rem.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                    necessitatibus, ducimus quas ea pariatur esse sequi iusto
                    repudiandae minus, harum quia, inventore aut officiis tempora
                    blanditiis quaerat explicabo optio rem.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                    necessitatibus, ducimus quas ea pariatur esse sequi iusto
                    repudiandae minus, harum quia, inventore aut officiis tempora
                    blanditiis quaerat explicabo optio rem.
                    </p>
                </div>
            </div>
        </section>    
    )
}