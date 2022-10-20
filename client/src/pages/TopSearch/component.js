import { StyledTopSearch } from "./style";
import { Profile } from "../../components/ProfileBlock";
import persianImg from '../../assets/images/image 2.png'; 

function TopSearch(){
  return (
    <StyledTopSearch>
      <header>
        <h1>Top 10 most searched breeds</h1>
      </header>
      <main>
        <Profile imgUrl={persianImg} title={`1. Bengal`} body={`Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.`} />
        <Profile imgUrl={persianImg} title={`2. Chartreux`} body={`The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.`} />
        <Profile imgUrl={persianImg} title={`3. Khao Manee`} body={`The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an ideal lap cat.`} />
      </main>
    </StyledTopSearch>
  )
}

export { TopSearch };