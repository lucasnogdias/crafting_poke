import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <CustomBtn>Press me</CustomBtn>
    </div>
  );
}

export default App;

const CustomBtn = styled.button`
  background-color: red;
`
