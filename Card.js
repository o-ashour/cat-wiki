import { StyledCard } from "./styles/Card.styled";

export default function Card(props) {
  return (
    <StyledCard layout={props.item.id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{props.item.title}</h2>
        <p>{props.item.body}</p>
      </div>

      <div>
        <img src={`./images/${props.item.image}`} alt='' />
      </div>
    </StyledCard>
  )
}