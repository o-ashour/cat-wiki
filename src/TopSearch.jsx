import { StyledC2a } from "./styles/C2a.styled";
import Card from "./components/Card";

function TopSearch(){
  return (
    <>
      <h1 style={{fontSize: '2.4rem', fontWeight: '600', padding: '0 1em', textAlign: 'left'}}>Top 10 most searched breeds</h1>
      <StyledC2a style={{margin: '3em 2em'}}>
        <h2>1. Bengal</h2>
        <Card imgWidth="full" caption="none"/>
        <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it. </p>
        <h2>2. Chartreux</h2>
        <Card imgWidth="full" caption="none"/>
        <p>The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well. </p>
        <h2>3. Khao Manee</h2>
        <Card imgWidth="full" caption="none"/>
        <p>The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.</p>
      </StyledC2a>
    </>
  )
}

export default TopSearch;