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
            <div className="min-h-screen gap-8 md:flex justify-items-center">
                <HtmlIcon />
                <CssIcon />
                <JSIcon />
                <ReactIcon />
                <ReduxIcon />
                <TypeScriptIcon />
            </div>
            <div className="min-h-screen gap-8 md:flex justify-items-center">
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