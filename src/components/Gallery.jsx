import Card from "./Card"
import { Flex } from "./styles/Flex.styled";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Gallery() {
  return (
    <>
      <Flex>
        <FaAngleLeft style={{alignSelf: 'center', position: 'absolute', left: 0}} fontSize="2em" fill="#DEC68B"/>
        <Card caption='none' />
        <Card caption='none' />
        <FaAngleRight style={{alignSelf: 'center', position: 'absolute', right: 0}} fontSize="2em" fill="#DEC68B"/>
        <Card caption='none' /> 
        <Card caption='none' />
      </Flex>
    </>
  )
}

export default Gallery;