import React from 'react'
import Header from '../components/common/Header'
import Program from './Main/Program'
import Networking from './Main/NetWorking'
import NameCard from './Main/NameCard'
import Sponsor from './Main/Sponsor'
import Map from './Main/Map'
import Hero from './Main/Hero'
import FAQ from './Main/FAQ'
import Staff from './Main/Staff'
import SNS from './Main/SNS'
import Footer from './Main/Footer'
import Introduce from './Main/Introduce'

const Main = () => {
  return (
    <>
      <Header />

      <Hero />

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
export default Main
