import React from 'react'
import './App.css'
import { Wrapper } from './components/containers'
import { Theme } from './theme/theme'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'

function App () {
  return (
    <Wrapper>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
