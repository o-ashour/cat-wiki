import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './style';
import { StyledMatchbox } from '../SearchModal/style';
import { React } from 'react';

function Input({ breedList, setSelectedBreedObj }) {
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