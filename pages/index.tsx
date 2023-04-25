import Image from 'next/image'
import { Inter } from 'next/font/google'
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import Introduce from '../components/Introduce'
import Program from '../components/Program'
import Networking from '../components/NetWorking'
import NameCard from '../components/NameCard'
import Sponsor from '../components/Sponsor'
import Map from '../components/Map'
import SNS from '../components/SNS'
import Staff from '../components/Staff'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Introduce />
      <Program />
      <Networking />
      <NameCard />
      <Sponsor />
      <Map />
      <FAQ />
      <SNS />
      <Staff />
      <Footer />
    </>
  )
}
