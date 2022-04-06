import * as React from 'react'
import { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'
import { Main } from '../containers'
import CompanyLogo from '../../assets/companyLogo'

const Search = styled('div')(({ theme }) => ({
  minWidth: '100px',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const Topnav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10)

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ transition: 'top 0.2s', top: visible ? '0' : '-70px' }}>
        <Main height="auto" flexDirection="row" marginTop="0" onBreakpoint=''>
        <Toolbar sx={{ minHeight: '44px !important', width: '100%', padding: '0 !important' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginRight: 0, display: { xs: 'none', md: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'block' }, fontSize: '15px' }}
          >
            <span style={{ fontFamily: 'Arial' }}>Menú</span>
          </Typography>
          <Search sx={{ display: { xs: 'none', md: 'block' }, border: '1px solid gray' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ fontSize: { xs: '13px', sm: '15px' } }}
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: { xs: 'space-between', md: 'center' }, margin: 'auto' }}
          >
                <CompanyLogo />
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button sx={{ border: { xs: 'none', md: '1px solid lightgray' }, margin: '0 20px', fontSize: { sm: '13px' }, backgroundColor: { xs: 'none', md: '#FFFF24' }, color: { xs: '#036998', md: '#000000' }, '&:hover': { color: { xs: '#036998', md: '#000000' }, backgroundColor: { xs: '#ffffff', md: '#FFFF24 !important' } } }}>SUSCRIBITE</Button>
            <Button sx={{ border: '1px solid', fontSize: { xs: '10px', sm: '13px' }, display: { xs: 'none', md: 'block' } }} color='secondary'>INGRESAR</Button>
          </Box>
        </Toolbar>
        </Main>
      </AppBar>
    </Box>
  )
}

export default Topnav
