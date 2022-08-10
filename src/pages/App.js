import { Logo } from '../components/Logo';
import { Desc } from '../components/Desc/component';
import { Input } from '../components/InputField';
import { Container } from '../components/Container';
import { StyledHero } from '../components/styles/Hero.styled';
import { Cover } from '../components/styles/Cover';
import { Wrapper } from '../components/styles/Wrapper';
import { Discover } from '../components/Discover/component';
import { StyledContainer } from '../components/styles/StyledContainer';
import { StyledC2a } from '../components/styles/C2a.styled';
import { C2a } from '../components/C2a';

function App() {
  return (
    <>
      <StyledContainer>
        <StyledHero>
          <Wrapper>
            <Logo theme='dark' section='hero'/>
            <Cover />
          </Wrapper>
          <Desc />  
          <Input />
        </StyledHero>
        <Discover />
      </StyledContainer>
      <StyledC2a>
        <section className='article-summary'>
          <hr></hr>
          <h1>Why should you have a cat?</h1>
          <p>Having a cat around can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
          <C2a value='READ MORE' />
        </section>
        <section>
          <Container className="article-images" />
        </section>
      </StyledC2a>
    </>
  );
}

export default App;