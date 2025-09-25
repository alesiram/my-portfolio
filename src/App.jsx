import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import About from '/src/components/About.jsx'
import Navbarmui from '/src/components/Navbar.jsx'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Hello from './components/Hello'
import './App.css'


function App() {
  const [mode, setMode] = useState('light');
  const theme = createTheme({
    palette: { mode },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage:
              mode === 'dark'
                ? `url("https://images.unsplash.com/photo-1677022733442-99d2d7c60c6f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                : `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1677022733442-99d2d7c60c6f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
          },
        },
      },
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <a id="top" />
    <Navbarmui setMode={setMode} mode={mode}/>
    <main>
     
      <section id='hello'><Hello /></section>
      <section id='about'> <About /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /> </section>
    </main>
    </ThemeProvider >
    </>
  )
}

export default App
