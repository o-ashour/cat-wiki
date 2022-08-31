import Description from "./Description";
import { StyledProfile } from "./style";
import Avatar from "./Avatar";

function Profile({ imgUrl, title, body }){
  return (
    <StyledProfile>
      <Avatar imgUrl={imgUrl} />
      <Description title={title} body={body}/>
    </StyledProfile>
  )
}

export { Profile };