import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import Logo from './components/Logo';
import Header from './components/Header';
import Desc from './components/Desc';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Footer from './components/Footer';
import { StyledHero } from './styles/Hero.styled';
import { Cover } from './styles/Cover';
import { Wrapper } from './styles/Wrapper';
import Discover from './components/Discover';
import { StyledContainer } from './styles/StyledContainer';
import { StyledC2a } from './styles/C2a.styled';
import { FaLongArrowAltRight } from 'react-icons/fa';

const theme = {
  colors: {
    primary: '#fff',
    secondary: '#E3E1DC',
    tertiary: '#000',
    accent_1: '#291507',
    accent_2: '#4D270C'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <StyledContainer>
          <StyledHero>
            <Wrapper>
              <Logo theme='dark' size='small'/>
              <Cover />
            </Wrapper>
            <Desc />  
            <Input />
          </StyledHero>
          <Discover />
        </StyledContainer>
        <StyledC2a>
          <hr></hr>
          <section>
            <h1>Why should you have a cat?</h1>
            <p>Having a cat around can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
            <button>
              <a href="#">
                READ MORE 
                <FaLongArrowAltRight style={{fontSize: '0.9rem', marginLeft: '0.75em'}}/>
              </a>
            </button>
          </section>
          <section>
            <Container className="article-images" />
          </section>
        </StyledC2a>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;