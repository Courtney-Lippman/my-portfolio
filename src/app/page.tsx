import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'


export default function Home() {
  return (
    <main className=" w-screen min-h-screen sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 box-border flex justify-center">
      <Navbar />
      <Carousel />
    </main>
  )
}
