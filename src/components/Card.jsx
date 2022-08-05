import persianImg from '../assets/images/image 2.png'; 

function Card({ caption }) {
  return (
    <figure>
      <img src={persianImg} alt='persian' />  
      <figcaption>
        {caption === 'none' ? null : 'persian'}
      </figcaption>
    </figure>
  )
}

export default Card;