import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/styles/Global';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#fff',
    secondary: '#E3E1DC',
    tertiary: '#000',
    accent_1: '#291507',
    accent_2: '#4D270C',
    accent_3: '#DEC68B',
    accent_4: '#544439',
    accent_5: '#E0E0E0'
  },
  breakpoints: {
    small: '600px',
    medium: '768px',
    large: '992px',
    extra_large: '1200px',
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