import Image from 'next/image'

export default function HeroSection() {
    return (
      <main className="relative">
        <div style={ {zIndex: -1} }
        className="absolute object-cover w-full min-h-screen overflow-hidden">
          <Image
            alt="computer-bg"
            src="/computer-hero.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <p className="p-40 text-5xl antialiased leading-10 text-center text-gray-200 text-align">
          Image Component
          <br />
          as a Background
        </p>
      </main>
    )
  }