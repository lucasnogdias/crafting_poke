import React from 'react';
import styled from 'styled-components';
import { pokeTypes as pokeTypesConstant, singleTypeProportion } from '../constants';

const GenerationControls = ({setSelectedType1, setSelectedType2}) => {

  const getRandomType = (pokeTypes) => {
    let randIndex = Math.floor(Math.random()*pokeTypes.length);
    return pokeTypes[randIndex];
  }

  const getRandomPokeTypes = () => {
    const singleType = Math.random()<singleTypeProportion;
    const type1 = getRandomType(pokeTypesConstant);
    setSelectedType1(type1);
    if (!singleType) {
      let remainingTypes = [...pokeTypesConstant];
      let typeToRemove = remainingTypes.indexOf(type1);
      remainingTypes.splice(typeToRemove, 1);
      const type2 = getRandomType(remainingTypes);
      setSelectedType2(type2)
    } else {
      setSelectedType2(null);
    }
  }

  return (
    <ControlsHolder>
      <CustomBtn
        onClick={()=>{
          getRandomPokeTypes();
        }}
      >
        Get Random Pokémon!
      </CustomBtn>
    </ControlsHolder>
  );
}

const ControlsHolder = styled.div`

`;

const CustomBtn = styled.button`

`;

export default GenerationControls;