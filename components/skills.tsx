import HtmlIcon from '../icons/html';
import ReactIcon from '../icons/react';
import TypeScriptIcon from '../icons/typescript';
import CssIcon from '../icons/css'
import NextIcon from '../icons/next'
import GatsbyIcon from '../icons/gatsby'
import ReduxIcon from '../icons/redux'
import GraphqlIcon from '../icons/graphql'
import GitIcon from '../icons/git'
import GithubIcon from '../icons/github'
import LinuxIcon from '../icons/linux'
import JSIcon from '../icons/javascript'

export default function Skills() {
    return (
        <section className="max-w-6xl min-h-screen m-auto" id="about">
            <div className="min-h-screen grid-cols-6 grid-rows-3 gap-x-16 gap-y-12 justify-items-center md:grid">
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <HtmlIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <CssIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <JSIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <ReactIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <ReduxIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <TypeScriptIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <NextIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <GatsbyIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                    <GraphqlIcon /> 
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">   
                    <GitIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                        <GithubIcon />
                </div>
                <div className="w-24 h-24 transition duration-500 ease-in-out transform hover:scale-125">
                        <LinuxIcon />
                </div>
            </div>
        </section>    
    )
}