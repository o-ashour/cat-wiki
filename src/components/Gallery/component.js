import { Flex } from "../styles/Flex.styled";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { StyledGallery } from "./style";
import { Card } from "../Cardi";


function Gallery() {
  return (
    <StyledGallery>
      <header>
        <h2>Other photos</h2>
      </header>
      <Flex className='details-gallery'>
        <FaAngleLeft style={{alignSelf: 'center', position: 'absolute', left: 0}} fontSize="2em" fill="#DEC68B"/>
        <Card caption='none' />
        <Card caption='none' />
        <FaAngleRight style={{alignSelf: 'center', position: 'absolute', right: 0}} fontSize="2em" fill="#DEC68B"/>
        <Card caption='none' /> 
        <Card caption='none' />
        <Card caption='none' /> 
        <Card caption='none' />
        <Card caption='none' /> 
        <Card caption='none' />
      </Flex>
    </StyledGallery>
  )
}

export { Gallery };