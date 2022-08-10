import Card from "./Card";
import Description from "./Description";
import { StyledProfile } from "./styles/Profile.styled";
import Avatar from "./Avatar";

function Profile({ imgUrl, title, body }){
  return (
    <StyledProfile>
      <Avatar imgUrl={imgUrl} />
      <Description title={title} body={body}/>
    </StyledProfile>
  )
}

export default Profile;

// <Card imgWidth="full" caption="none"/>
