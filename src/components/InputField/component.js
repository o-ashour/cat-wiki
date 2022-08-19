import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './style';
import { React, useContext } from 'react';
import { UserContext } from '../../App';
import Modal from './Modal';
// figure out a way to not only select breed from search results modal, but actually
// go to 'Details' page when click on breed

function Input() {
  const { setSelectedBreedObj, isModalOpen, setIsModalOpen, breedList, setBreedList } = useContext(UserContext);

  function handleClick(e){
      const selectedBreedId = e.target.id;
      setSelectedBreedObj(breedList[selectedBreedId]);
  } 

  function handleChange(e){
    if (e.target.value === '') {
      setIsModalOpen(false)
    }
    else {
      setIsModalOpen(true);
      const inputStr = e.target.value;
      const miniInputStr = minifyString(inputStr);
      const miniBreedStrArr = [];
      breedList.forEach((breed) => miniBreedStrArr.push(minifyString(breed.name)));
      const filteredBreedsIdx = [];
      miniBreedStrArr.forEach((breedName, idx) => {
        if (breedName.includes(miniInputStr)){
          filteredBreedsIdx.push(idx);
        }
      });
      console.log(miniBreedStrArr.filter((breed) => breed.includes(miniInputStr)));
      console.log(filteredBreedsIdx);

      const filteredBreeds = breedList.filter((breed, idx) => 
      {
        return filteredBreedsIdx.some(item => item === idx);
      });      
    }
  }

  function minifyString(str){
    const miniStrArr = (str.match(/[A-Za-z]/g));
    let miniStr = '';
    miniStrArr.forEach((letter) => miniStr += letter);
    return miniStr.toLowerCase();
  }

  return (
    <div>
      <StyledInput>
        <input onChange={handleChange} className='input-btn' placeholder='Search' />
        <FaSearch />
      </StyledInput>
      {isModalOpen && <Modal breedList={breedList} onClick={handleClick} id='modal' />}   
    </div>
  )
}

export { Input };