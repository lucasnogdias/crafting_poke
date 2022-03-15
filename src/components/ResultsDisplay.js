import React from 'react';
import styled from 'styled-components';
import { typeColors } from '../constants';

const ResultsDisplay = ({selectedType1, selectedType2}) => {
  return (
    <>
      {selectedType1? (
        <ResultsBorder
          backgroundColor1={typeColors[selectedType1]}
          backgroundColor2={selectedType2?typeColors[selectedType2]:'#333'}
        >
          <ResultsHolder
            backgroundColor1={typeColors[selectedType1]}
            backgroundColor2={selectedType2?typeColors[selectedType2]:typeColors[selectedType1]}
          >
            <PokeType>{selectedType1+(selectedType2?('/'+selectedType2):'')}</PokeType>
          </ResultsHolder>
        </ResultsBorder>
      ) : null}
    </>
  );
}

const ResultsBorder = styled.div`
  margin-top: 2%;
  width:50%;
  padding: 8px;
  background-image: ${props => ('linear-gradient(145deg, '+props.backgroundColor2+', '+props.backgroundColor1+')')};
  border-radius: 25px;
`

const ResultsHolder = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props => ('linear-gradient(145deg, '+props.backgroundColor1+', '+props.backgroundColor2+')')};
  border-radius: 20px;
`;

const PokeType = styled.h1`
  color: white;
`

export default ResultsDisplay;