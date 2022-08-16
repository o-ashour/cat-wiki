import { Link } from "react-router-dom";

function BreedItem({ id, breed, onClick }){
  return (
    <li onClick={onClick}>
      <Link id={id} to='/details'>{breed.name}</Link>
    </li>
  )
}

export default BreedItem;