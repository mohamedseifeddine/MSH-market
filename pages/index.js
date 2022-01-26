import React from 'react'
import Head from 'next/head'
import Home from './home'

export default function market() {
  return (
    <>
      <Head>
        <title>MSH-market</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
