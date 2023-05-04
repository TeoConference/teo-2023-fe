import React from 'react'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import FAQ from '@/components/FAQ'
import Introduce from '@/components/Introduce'
import Program from '@/components/Program'
import Networking from '@/components/NetWorking'
import NameCard from '@/components/NameCard'
import Sponsor from '@/components/Sponsor'
import Map from '@/components/Map'
import SNS from '@/components/SNS'
import Staff from '@/components/Staff'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Head from 'next/head'
import MetaHead from '@/components/common/MetaHead'
import CodeOfConduct from '@/components/CodeOfConduct'

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
