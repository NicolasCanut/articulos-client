import React from 'react'
import { Main, Wrapper } from '../components/Containers'
import Footer from '../components/navigation/footer'
import Navbar from '../components/navigation/navbar'
import { Title } from '../components/Typography'

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main height= '100vh' flexDirection='column' marginTop='80px'>
        <Title>Acumulado Grilla</Title>
      </Main>
      <Footer />
    </Wrapper>
  )
}

export default Home
