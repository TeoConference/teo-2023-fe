import React from 'react'

import Header from '@/components/second/Header'
import FAQ from '@/components/second/FAQ'
import Introduce from '@/components/second/Introduce'
import Program from '@/components/second/Program'
import Networking from '@/components/second/NetWorking'
import NameCard from '@/components/second/NameCard'
import Sponsor from '@/components/second/Sponsor'
import Map from '@/components/second/Map'
import SNS from '@/components/second/SNS'
import Staff from '@/components/second/Staff'
import Footer from '@/components/second/Footer'
import Banner from '@/components/second/Banner'
import MetaHead from '@/components/second/common/MetaHead'
import CodeOfConduct from '@/components/second/CodeOfConduct'

export default function Home() {
  return (
    <>
      <MetaHead />
      <Header />
      <Banner />
      <Introduce />
      <Program />
      <Networking />
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
