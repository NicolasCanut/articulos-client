import React from 'react'
import styled from 'styled-components'
import { ImgLink } from '../components/Typography'

const LogoImg = styled.div.attrs((props: {imgSrc: string}) => props)`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imgSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`

const CompanyLogo = () => {
  return (
    <ImgLink href='/' height='100%' width='100%'>
      <LogoImg imgSrc={require('../assets/img/lanacionLogo.png')}/>
    </ImgLink>
  )
}

export default CompanyLogo
