import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import GenerationControls from './GenerationControls';
import ResultsDisplay from './ResultsDisplay';

const PokeGenerator = () =>{
  const [selectedType1, setSelectedType1] = useState(null);
  const [selectedType2, setSelectedType2] = useState(null);

  return(
    <PokeGeneratorContainer>
      <GenerationControls 
        setSelectedType1={setSelectedType1}
        setSelectedType2={setSelectedType2}
      />
      <ResultsDisplay 
        selectedType1={selectedType1}
        selectedType2={selectedType2}
      />
    </PokeGeneratorContainer>
  );
}

const PokeGeneratorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9ebf0;
`

export default PokeGenerator;