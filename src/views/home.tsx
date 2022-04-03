import React from 'react'
import { Main } from '../components/containers/Main'
import { Wrapper } from '../components/containers/Wrapper'
import Navbar from '../components/navigation/navbar'
import { Title } from '../components/typography/pageTitle'

export const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main height= '100vh' flexDirection='column' marginTop='80px'>
        <Title>Acumulado Grilla</Title>
      </Main>
    </Wrapper>
  )
}
