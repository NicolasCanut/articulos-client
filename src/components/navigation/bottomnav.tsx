import * as React from 'react'
import { useEffect, useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box, styled } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Bottomnav = () => {
  const [value, setValue] = useState(0)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    setVisible((prevScrollPos > currentScrollPos))

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const RouterLink = styled(Link)({
    display: 'flex',
    flexDirection: 'column',
    color: 'inherit',
    textDecoration: 'none',
    textAlign: 'center',
    font: '12px arial',
    marginBottom: '10px'
  })

  return (
      <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'fixed', transition: 'bottom 0.2s', bottom: visible ? '0' : '-70px', right: 0, left: 0, margin: 'auto', width: '100%', backgroundColor: '#ffffff', zIndex: 999 }}>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        sx={{ height: '70px', width: '700px', maxWidth: '90%', color: '#000000', margin: 'auto' }}
        >
        <RouterLink to={'/'}><BottomNavigationAction disableRipple sx={{ color: 'inherit', position: 'relative', top: '5px' }} icon={<HomeIcon/>}/>Home</RouterLink>
        <RouterLink to={'/'}><BottomNavigationAction disableRipple sx={{ color: 'inherit', position: 'relative', top: '5px' }} icon={<CreditCardIcon />} />Club LA NACION</RouterLink>
        <RouterLink to={'/'}><BottomNavigationAction disableRipple sx={{ color: 'inherit', position: 'relative', top: '5px' }} icon={<ChatBubbleOutlineIcon />} />Mi cuenta</RouterLink>
        <RouterLink to={'/'}><BottomNavigationAction disableRipple sx={{ color: 'inherit', position: 'relative', top: '5px' }} icon={<MenuIcon />} />Menú</RouterLink>
        </BottomNavigation>
      </Box>
  )
}

export default Bottomnav
