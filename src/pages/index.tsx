import React from 'react'
import Head from 'next/head'

import Logo from '../assets/gabrieldesenvolvedor.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Hello World</h1>
      <Logo />
    </Container>
  )
}

export default Home
