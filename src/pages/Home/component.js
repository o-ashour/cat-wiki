import { Logo } from "../../components/Logo";
import { Input } from "../../components/InputField";
import { Discover } from "../../components/Discover/component";
import { StyledHome } from "./style";
import { StyledArticle } from "../../components/Global/Article.styled";
import { C2a } from "../../components/C2a";
import ladyImg from "../../assets/images/image 1.png";
import persianImg from "../../assets/images/image 2.png";
import roadImg from "../../assets/images/image 3.png";

function Home() {
  return (
    <StyledHome>
      <div className="container">
        <section className="hero-container">
          <div className="wrapper">
            <Logo theme="dark" />
            <div className="logo-cover" />
          </div>
          <p>Get to know more about your cat breed</p>
          <Input id="main-input" />
        </section>
        <Discover />
      </div>
      <StyledArticle className="info">
        <section className="article-summary">
          <hr></hr>
          <h1>Why should you have a cat?</h1>
          <p>
            Having a cat around can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety levels
          </p>
          <C2a value="READ MORE" url="#" direction="right" />
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
