import Description from "./elements/Description";
import { StyledProfile } from "./style";
import Avatar from "./elements/Avatar";

function Profile({ name, imgUrl, body, idx }) {
  return (
    <StyledProfile>
      <Avatar imgUrl={imgUrl} name={name} />
      <Description name={name} body={body} idx={idx} />
    </StyledProfile>
  );
}

export { Profile };
