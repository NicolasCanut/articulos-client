import React from 'react'
import styled from 'styled-components'
import { Facebook, Twitter, Instagram, RssFeed } from '@mui/icons-material'
import { Main } from '../Containers'
import CompanyLogo from '../../assets/companyLogo'
import { ImgLink, TextLink } from '../Typography'

const FooterRow = styled.section<{ flex: string }>`
    display: flex;
    border: 1px solid red;
    flex: ${(props) => props.flex};
`

const FooterColumn = styled.section<{ flex: string, padding: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => props.padding};
    border: 1px solid blue;
    font-family: arial;
    flex: ${(props) => props.flex};
    color: #5a5a5a;
`

const Footer = () => {
  return (
    <Main height='200px' flexDirection='column' marginTop='0'>
    <FooterRow flex='1'>
        <FooterColumn flex='1' padding='0 50px 0 0'>
          <ImgLink height='30px' width='30px' >
            <Facebook sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
          <ImgLink height='30px' width='30px' >
            <Twitter sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
          <ImgLink height='30px' width='30px' >
            <Instagram sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
          <ImgLink height='30px' width='30px' >
            <RssFeed sx={{ margin: { xs: '0 5px', md: '0' }, height: '100%', width: '100%' }}/>
          </ImgLink>
        </FooterColumn>
        <FooterColumn flex='1' padding='0 100px'>
          <CompanyLogo />
        </FooterColumn>
        <FooterColumn flex='1' padding='0 0 0 50px'>
          <ImgLink height='50px' width='140px' target='_blank' rel='noopener noreferrer' href='https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{ height: '100%', width: '100%' }} alt='Disponible en Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'/></ImgLink>
        </FooterColumn>
    </FooterRow>
    <FooterRow flex='1'>
      <FooterColumn flex='2' padding='0 50px 0 0'>
        <TextLink href='http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html' target='_blank' rel='noopener noreferrer'>
          Mapa del sitio
        </TextLink>
        <TextLink href='https://micuenta.lanacion.com.ar/ayuda' target='_blank' rel='noopener noreferrer'>
          Ayuda
        </TextLink>
        <TextLink href='https://micuenta.lanacion.com.ar/tyc' target='_blank' rel='noopener noreferrer'>
          Términos y condiciones
        </TextLink>
        <TextLink href='https://www.lanacion.in/#/' target='_blank' rel='noopener noreferrer'>
          ¿Cómo anunciar?
        </TextLink>
        <TextLink href='https://suscripciones.lanacion.com.ar/suscribirme/' target='_blank' rel='noopener noreferrer'>
          Suscribirse al diario impreso
        </TextLink>
      </FooterColumn>
      <FooterColumn flex='1' padding='0 0 0 50px'>
        <p>
          Protegido por re CAPTCHA:
        </p>
        <TextLink href='https://policies.google.com/terms?hl=es-419' target='_blank' rel='noopener noreferrer'>
          Condiciones
        </TextLink>
        <TextLink href='https://policies.google.com/privacy?hl=es-419' target='_blank' rel='noopener noreferrer'>
          Privacidad
        </TextLink>
      </FooterColumn>
    </FooterRow>
    <FooterRow flex='1'>
      <FooterColumn flex='1' padding='0 50px 0 0'>
        <p>
          Copyright 2019 LA NACION | Todos los derechos reservados
        </p>
      </FooterColumn>
      <FooterColumn flex='1' padding='0 0 0 50px'>
        <img src='https://static.glanacion.com/v2/ln/img/gda.jpg'/>
        <p>
          Miembro de GDA. Grupo de diarios América
        </p>
        <ImgLink height='44px' width='32' href='https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx'>
          <img style={{ height: '100%', width: '100%' }} src='https://static.glanacion.com/v2/ln/img/data.jpg' />
        </ImgLink>
      </FooterColumn>
    </FooterRow>
    </Main>
  )
}

export default Footer
