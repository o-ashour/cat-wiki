import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './style';
import { React, useContext } from 'react';
import { UserContext } from '../../App';
import Modal from './Modal';
// figure out a way to not only select breed from search results modal, but actually
// go to 'Details' page when click on breed

function Input({ breedList }) {
  const { setSelectedBreedObj, isModalOpen, setIsModalOpen } = useContext(UserContext);

  function handleClick(e){
      const selectedBreedId = e.target.id;
      setSelectedBreedObj(breedList[selectedBreedId]);
  } 

  function handleChange(e){
    e.target.value === '' ? setIsModalOpen(false) : setIsModalOpen(true);
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