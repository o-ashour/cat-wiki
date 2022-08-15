import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './style';
import { StyledMatchbox } from '../SearchModal/style';
import { React } from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';


function Input({ breedList }) {
  const { setSelectedBreedObj } = useContext(UserContext);

  function handleClick(e){
    const selectedBreedId = e.target.id;
    setSelectedBreedObj(breedList[selectedBreedId]);
  }

  return (
    <label>
      <StyledInput placeholder='Search' />
      <FaSearch />
      <StyledMatchbox>
        <ul>
          {breedList.map((breed, idx) => {
            return <li id={idx} onClick={handleClick}>{breed.name}</li>;
          })}
        </ul>
      </StyledMatchbox>
    </label>
  )
}

export { Input };