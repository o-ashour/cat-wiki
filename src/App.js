import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import Logo from './components/Logo';
import Header from './components/Header';
import Desc from './components/Desc';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Footer from './components/Footer';
import { StyledInput } from './styles/Input.styled';

const theme = {
  colors: {
    primary: '#fff',
    secondary: '#E3E1DC',
    tertiary: '#000',
    accent: '#291507',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <div className="Container">
          <StyledInput>
            <Logo />
            <p>Get to know more about your cat breed</p>
            <Input />
          </StyledInput>
          <section>
            <header>
              <h3>Most Searched Breeds</h3>
              <hr></hr>
              <h2>66+ Breeds For you to Discover</h2>
            </header>
            <article>
              <Card />
              <Card />
              <Card />
              <Card />
            </article>
          </section>
        </div>
        <hr></hr>
        <article>
          <section>
            <h1>Why should you have a cat?</h1>
            <p>Having a cat around can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
            <button>
              <a href="#">
                READ MORE 
                <i></i>
              </a>
            </button>
          </section>
          <section>
            <Container className="article-images" />
          </section>
        </article>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;