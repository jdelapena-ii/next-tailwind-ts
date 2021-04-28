import Image from 'next/image'

export default function About() {
    return (
        <section className="w-full max-w-4xl min-h-screen m-auto" id="about">
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