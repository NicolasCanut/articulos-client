import React from 'react'
import { Main, Wrapper } from '../components/Containers'
import Footer from '../components/footer'
import Topnav from '../components/navigation/topnav'
import { Title } from '../components/Typography'

const Home = () => {
  return (
    <Wrapper>
      <Topnav />
      <Main height= '100vh' flexDirection='column' marginTop='80px'>
        <Title>Acumulado Grilla</Title>
      </Main>
      <Footer />
    </Wrapper>
  )
}

export default Home
