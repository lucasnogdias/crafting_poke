import React from 'react';
import styled from 'styled-components';
import { typeColors } from '../constants';
import { capitalizeFirstLetter } from '../helpers/helpers';

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
            <TypeImg
              src={'/img/'+selectedType1+'.png'} 
              alt=''
              singleType={selectedType2?false:true}
            />
            <PokeType>{capitalizeFirstLetter(selectedType1)+(selectedType2?(' / '+capitalizeFirstLetter(selectedType2)):'')}</PokeType>
            {selectedType2 ?
              <TypeImg src={'/img/'+selectedType2+'.png'} alt=''></TypeImg> :
              null
            }
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

const TypeImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 5%;
  margin-left: ${props => props.singleType ? '-20%' : '5%'}
`;

export default ResultsDisplay;