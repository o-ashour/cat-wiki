import { Link } from "react-router-dom";

function BreedItem({ id, breed, onClick }){
  return (
    <Link to='/details' className='modal-item'>
      <li id={id} onClick={onClick}>{breed.name}</li>
    </Link>
  )
}

export default BreedItem;

