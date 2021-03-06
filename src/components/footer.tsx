import React from 'react'
import styled from 'styled-components'
import { Facebook, Twitter, Instagram, RssFeed } from '@mui/icons-material'
import { Main } from './containers'
import CompanyLogo from '../assets/companyLogo'
import { ImgLink, TextLink } from './typography'
import { Box } from '@mui/material'

const FooterRow = styled.section<{mobileDisplay: string, flex: string }>`
    display: flex;
    flex: ${(props) => props.flex};
    @media (max-width: 900px) {
        display: ${(props) => props.mobileDisplay};
        flex-direction: column;
        align-items: center;
        border-bottom: none !important;
    }
`

const FooterColumn = styled.section<{ flex: string, mobileOrder: string, margin: string }>`
    display: flex;
    flex: ${(props) => props.flex};
    align-items: center;
    justify-content: space-between;
    margin: ${(props) => props.margin};
    font-family: arial;
    font-size: 0.875em;
    color: #5a5a5a;
    @media (max-width: 900px) {
        order: ${(props) => props.mobileOrder};
        width: 320px;
        margin: 10px 0;
        justify-content: space-around;
        text-align: center;
    }
`

const LogoUnderline = styled.hr`
    margin: 10px 0;
    @media (max-width: 900px){
        display: block;
        width: 100vw;
    }
`

const Footer = () => {
  return (
    <Main height='100%' flexDirection='column' marginTop='0' onBreakpoint=''>
    <FooterRow flex='1' mobileDisplay='flex' style={{ borderBottom: '1px solid gray' }}>
        <FooterColumn flex='1' margin='' mobileOrder='2' style={{ minWidth: '200px', maxWidth: '300px' }}>
          <ImgLink href='https://www.facebook.com/lanacion' height='30px' width='30px' target='_blank' rel='noopener noreferrer'>
            <Facebook sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
          <ImgLink href='https://twitter.com/LANACION' height='30px' width='30px' target='_blank' rel='noopener noreferrer'>
            <Twitter sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
          <ImgLink href='https://www.instagram.com/lanacioncom/' height='30px' width='30px' target='_blank' rel='noopener noreferrer'>
            <Instagram sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
          <ImgLink href='http://servicios.lanacion.com.ar/herramientas/rss/ayuda' height='30px' width='30px' target='_blank' rel='noopener noreferrer'>
            <RssFeed sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
        </FooterColumn>
        <FooterColumn style={{ flexDirection: 'column', paddingTop: '20px' }} flex='1' margin='0 7%' mobileOrder='1'>
          <CompanyLogo />
          <LogoUnderline />
        </FooterColumn>
        <FooterColumn flex='1' margin='' mobileOrder='3' style={{ maxWidth: '300px' }}>
          <ImgLink height='50px' width='140px' target='_blank' rel='noopener noreferrer' href='https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419'><img style={{ height: '100%', width: '100%' }} alt='Disponible en Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'/></ImgLink>
          <ImgLink height='50px' width='140px' target='_blank' rel='noopener noreferrer' href='https://apps.apple.com/ar/app/la-nacion/id410689702'><img style={{ height: '100%', width: '100%' }} alt='Cons??guelo en App Store' src={ require('../assets/img/AppleAppStoreBadge.png') }/></ImgLink>
        </FooterColumn>
    </FooterRow>
    <FooterRow flex='1' mobileDisplay='none' style={{ marginTop: '20px' }}>
      <FooterColumn flex='2' margin='0 150px 0 0' mobileOrder=''>
        <TextLink href='http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html' target='_blank' rel='noopener noreferrer'>
          Mapa del sitio
        </TextLink>
        <TextLink href='https://micuenta.lanacion.com.ar/ayuda' target='_blank' rel='noopener noreferrer'>
          Ayuda
        </TextLink>
        <TextLink href='https://micuenta.lanacion.com.ar/tyc' target='_blank' rel='noopener noreferrer'>
          T??rminos y condiciones
        </TextLink>
        <TextLink href='https://www.lanacion.in/#/' target='_blank' rel='noopener noreferrer'>
          ??C??mo anunciar?
        </TextLink>
        <TextLink href='https://suscripciones.lanacion.com.ar/suscribirme/' target='_blank' rel='noopener noreferrer'>
          Suscribirse al diario impreso
        </TextLink>
      </FooterColumn>
      <FooterColumn flex='1' margin='' mobileOrder='' style={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <p style={{ marginRight: '5px' }}>
          Protegido por re CAPTCHA:
        </p>
        <Box>
          <TextLink href='https://policies.google.com/terms?hl=es-419' target='_blank' rel='noopener noreferrer'>
            Condiciones
          </TextLink>
          <TextLink style={{ marginRight: '0' }} href='https://policies.google.com/privacy?hl=es-419' target='_blank' rel='noopener noreferrer'>
            Privacidad
          </TextLink>
        </Box>
      </FooterColumn>
    </FooterRow>
    <FooterRow flex='1' mobileDisplay='flex'>
      <FooterColumn flex='2' margin='0 0 50px 0' mobileOrder='2'>
        <p>
          Copyright 2019 LA NACION | Todos los derechos reservados
        </p>
      </FooterColumn>
      <FooterColumn flex='1' margin='0 0 50px 0' mobileOrder='1'>
        <img src='https://static.glanacion.com/v2/ln/img/gda.jpg'/>
        <p style={{ margin: '0 10px' }}>
          Miembro de GDA. Grupo de diarios Am??rica
        </p>
        <ImgLink style={{ position: 'relative', top: '15px' }} height='44px' width='32' href='https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx' target='_blank' rel='noopener noreferrer'>
          <img style={{ height: '100%', width: '100%' }} src='https://static.glanacion.com/v2/ln/img/data.jpg' />
        </ImgLink>
      </FooterColumn>
    </FooterRow>
    </Main>
  )
}

export default Footer
