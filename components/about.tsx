import Image from 'next/image'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

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
                    <h2 className="text-4xl">Hello 👋🏽</h2>
                    <Button onClick={toggleColorMode}>Dark Mode</Button>
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