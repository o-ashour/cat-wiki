import { FaSearch } from 'react-icons/fa';
import { StyledInput } from './style';
import { React, useContext, useState } from 'react';
import { UserContext } from '../../App';
import Modal from './Modal';
// figure out a way to not only select breed from search results modal, but actually
// go to 'Details' page when click on breed

function Input({ breedList }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { setSelectedBreedObj } = useContext(UserContext);
  console.log('I Render');

  function handleClick(e){
    const selectedBreedId = e.target.id;
    setSelectedBreedObj(breedList[selectedBreedId]);
    console.log('clicked');
  }

  function handleFocus(){
    setIsModalOpen(true);
  }

  function handleBlur(){
    setIsModalOpen(false);
  }

  return (
    <StyledInput isModalOpen={isModalOpen}>
      {console.log("I'm returning")}
      <input className='input-btn' placeholder='Search' onFocus={handleFocus} onBlur={handleBlur} />
      <FaSearch />
      {isModalOpen && <Modal breedList={breedList} className='input-modal' onClick={handleClick} />}
    </StyledInput>
  )
}

export { Input };