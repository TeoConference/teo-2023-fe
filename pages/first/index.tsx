import Header from '@/components/first/Header'
import FAQ from '@/components/first/FAQ'
import Introduce from '@/components/first/Introduce'
import Program from '@/components/first/Program'
import Networking from '@/components/first/NetWorking'
import Gallery from '@/components/first/Gallery'
import NameCard from '@/components/first/NameCard'
import Sponsor from '@/components/first/Sponsor'
import Map from '@/components/first/Map'
import SNS from '@/components/first/SNS'
import Staff from '@/components/first/Staff'
import Footer from '@/components/first/Footer'
import Banner from '@/components/first/Banner'
import MetaHead from '@/components/first/common/MetaHead'
import CodeOfConduct from '@/components/first/CodeOfConduct'

export default function Home() {
  return (
    <>
      <MetaHead />
      <Header />
      <Banner />
      <Introduce />
      <Program />
      <Networking />
      <Gallery />
      <NameCard />
      <Sponsor />
      <Map />
      <FAQ />
      <CodeOfConduct />
      <SNS />
      <Staff />
      <Footer />
    </>
  )
}
