import { Box } from '@chakra-ui/react'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className="bg-green-400 " id="projects">
            <Box bg="tomato" w="100%" p={4} color="white" className="grid-cols-3 grid-rows-3 md:grid gap-x-6 gap-y-6">
                <Link href="https://www.jedodels.com/">
                    <a target="_blank">
                        <Box bg="yellow" w={96} h={48} >
                            First Project
                        </Box>
                    </a>
                </Link>
                <Link href="https://elnardintegratedfarm.netlify.app/">
                    <a target="_blank">
                        <Box bg="blue" w={96} h={48} >
                            Second Project
                        </Box>
                    </a>
                </Link>
                <Link href="https://jedo-react-todo.netlify.app/">
                    <a target="_blank">
                        <Box bg="green" w={96} h={48} >
                            Third Project
                        </Box>
                    </a>
                </Link>
            </Box>
        </div>    
    )
}