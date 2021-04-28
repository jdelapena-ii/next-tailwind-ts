import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function Skills() {
    const { toggleColorMode } = useColorMode();
    return (
        <div className="bg-teal-500" id="skills">
            <p className="text-3xl">Skills Section</p>
            <Button onClick={toggleColorMode}></Button>
        </div>    
    )
}