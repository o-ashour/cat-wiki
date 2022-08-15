import { Logo } from '../components/Logo';
import { Input } from '../components/InputField';
import { ImgContainer } from '../components/ImgContainer';
import { Cover } from '../components/styles/Cover.styled';
import { Flex } from '../components/styles/Flex.styled';
import { Discover } from '../components/Discover/component';
import { StyledContainer } from '../components/HeroContainer/style';
import { StyledArticle } from '../components/Article/style';
import { C2a } from '../components/C2a';
// import { useContext } from "react";
// import { UserContext } from '../App';
// import { UserContext } from './Layout';

function Home({ breedList }) {
  // const breedContext = useContext(UserContext);

  return (
    <>
      <StyledContainer>
        <section className='hero-container'>
          <Flex>
            <Logo theme='dark' />
            <Cover />
          </Flex>
          <p>Get to know more about your cat breed</p> 
          <Input breedList={breedList} />
        </section>
        <Discover />
      </StyledContainer>
      <StyledArticle>
        <section className='article-summary'>
          <hr></hr>
          <h1>Why should you have a cat?</h1>
          <p>Having a cat around can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
          <C2a value='READ MORE' />
        </section>
        <ImgContainer className="article-images" />
      </StyledArticle>
    </>
  );
}

export default Home;