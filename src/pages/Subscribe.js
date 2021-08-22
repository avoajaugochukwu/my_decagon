import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Steps from '../components/Steps'
import SubscribeInteractive from '../components/SubscribeInteractive/SubscribeInteractive'

export default function Subscribe() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Steps />
      <SubscribeInteractive />
      <Footer />
    </Fragment>
  )
}
