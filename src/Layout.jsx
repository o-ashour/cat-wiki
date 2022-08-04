import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#fff',
    secondary: '#E3E1DC',
    tertiary: '#000',
    accent_1: '#291507',
    accent_2: '#4D270C',
    accent_3: '#DEC68B'
  }
}

function Layout(){
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout;