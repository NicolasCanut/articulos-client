import React from 'react'
import { Advertising, Aside, Cover, Main, Wrapper } from '../components/containers'
import Footer from '../components/footer'
import BottomNav from '../components/navigation/bottomnav'
import Topnav from '../components/navigation/topnav'
import { Title } from '../components/typography'
import Articles from '../services/articles'

const Home = () => {
  return (
    <Wrapper>
      <Topnav />
      <Cover>
        <Main height='100%' marginTop='' flexDirection='' onBreakpoint='width: 100%; max-width: 100%;'>
          <Advertising height='100%' width='100%'/>
        </Main>
      </Cover>
      <Main height= 'auto' flexDirection='row' marginTop='40px' onBreakpoint=''>
        <Main height='auto' flexDirection='column' marginTop='' onBreakpoint='max-width: 100%'>
          <Title>Acumulado Grilla</Title>
          <Articles/>
        </Main>
        <Aside>
        </Aside>
      </Main>
      <BottomNav />
      <Footer />
    </Wrapper>
  )
}

export default Home
