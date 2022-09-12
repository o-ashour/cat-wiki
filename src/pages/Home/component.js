import { Logo } from "../../components/Logo";
import { Input } from "../../components/InputField";
import { Cover } from "../../components/styles/Cover.styled";
import { Flex } from "../../components/styles/Flex.styled";
import { Discover } from "../../components/Discover/component";
import { StyledHome } from "./style";
import { StyledArticle } from "../../components/Article/style";
import { C2a } from "../../components/C2a";
import ladyImg from "../../assets/images/image 1.png";
import persianImg from "../../assets/images/image 2.png";
import roadImg from "../../assets/images/image 3.png";

function Home() {
  return (
    <StyledHome>
      <div className="container">
        <section className="hero-container">
          <Flex>
            <Logo theme="dark" />
            <Cover />
          </Flex>
          <p>Get to know more about your cat breed</p>
          <Input className="main-input" id="main-input" />
        </section>
        <Discover />
      </div>
      <StyledArticle>
        <section className="article-summary">
          <hr></hr>
          <h1>Why should you have a cat?</h1>
          <p>
            Having a cat around can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety levels
          </p>
          <C2a value="READ MORE" url="#" />
        </section>
        <section className="article-images">
          <img src={persianImg} alt="persian cat" />
          <img src={roadImg} alt="cat on the road" />
          <img src={ladyImg} alt="lady & cat" />
        </section>
      </StyledArticle>
    </StyledHome>
  );
}

export { Home };
