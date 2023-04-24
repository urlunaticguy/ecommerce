import Image from 'next/image'
import { Inter } from 'next/font/google'
import LandingScreen from './frontend/screens/LandingScreen/LandingScreen'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` py-4 px-6 flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <LandingScreen />
    </main>
  )
}
