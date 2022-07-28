import persianImg from '../assets/images/image 2.png'; 

function Card() {
  return (
    <figure>
      <img src={persianImg} alt='persian' />  
      <figcaption>Persian</figcaption>
    </figure>
  )
}

export default Card;