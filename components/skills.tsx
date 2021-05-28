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
                <HtmlIcon />
                <CssIcon />
                <JSIcon />
                <ReactIcon />
                <ReduxIcon />
                <TypeScriptIcon />
                <NextIcon />
                <GatsbyIcon />
                <GraphqlIcon /> 
                <GitIcon />
                <GithubIcon />
                <LinuxIcon />
            </div>
        </section>    
    )
}