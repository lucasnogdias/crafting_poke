import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { pokeTypes as pokeTypesConstant, singleTypeProportion } from '../constants';
import { capitalizeFirstLetter } from '../helpers/helpers';

const GenerationControls = ({setSelectedType1, setSelectedType2}) => {

  const [customSingleTypeChance, setCustomSingleTypeChance] = useState(1-singleTypeProportion);
  const [activeTypes, setActiveTypes] = useState(pokeTypesConstant.reduce((result, item) => {return ({...result, [item]:true})}, {}));
  const [allActive, setAllActive] = useState(true);
  const [typeError, setTypeError] = useState({hasError: false, errorMsg: ''});

  useEffect(()=>{
    //TODO: set/unset allActive when active types change
  }, [activeTypes])

  const getRandomType = (pokeTypes) => {
    let randIndex = Math.floor(Math.random()*pokeTypes.length);
    return pokeTypes[randIndex];
  }

  const getRandomPokeTypes = () => {
    let rand = Math.random();
    let usableTypes = pokeTypesConstant.filter(type => activeTypes[type]);
    if (usableTypes.length<1) {
      setTypeError({hasError: true, errorMsg:'Please select at least one Available Type'})
    } else {
      setTypeError({hasError: false, errorMsg:''})
    }
    const singleType = rand>customSingleTypeChance;
    const type1 = getRandomType(usableTypes);
    setSelectedType1(type1);
    if (!singleType && usableTypes.length>1) {
      let remainingTypes = [...usableTypes];
      let typeToRemove = remainingTypes.indexOf(type1);
      remainingTypes.splice(typeToRemove, 1);
      const type2 = getRandomType(remainingTypes);
      setSelectedType2(type2)
    } else {
      setSelectedType2(null);
    }
  }

  const renderTypeCheckboxes = () => {
    let checkboxes = [];
    for (let i = 0; i<pokeTypesConstant.length; i++) {
      let pokeType = pokeTypesConstant[i];
      checkboxes.push(
        <div key={pokeType+'_checkbox'}>
          <input 
            type="checkbox" 
            id={pokeType} 
            name={pokeType}
            checked={activeTypes[pokeType]} 
            onChange={()=>{setActiveTypes({...activeTypes, [pokeType]: !activeTypes[pokeType]})}}
          />
          <label for={pokeType}>{capitalizeFirstLetter(pokeType)}</label>
        </div>
      );
    }
    return checkboxes;
  }

  return (
    <ControlsHolder>
      <div>
        <div>
          <label>Dual Type Chance</label>
          <input 
            value={customSingleTypeChance*100} 
            type='number' 
            onChange={(evt)=>{setCustomSingleTypeChance(evt.target.value/100)}}
            min={0}
            max={100}
          />
        </div>
        <div>
          <label>Available Types</label>
          <input 
            type="checkbox" 
            id='allTypes' 
            name='allTypes'
            checked={allActive} 
            onChange={()=>{
              let newActiveTypes = {...activeTypes};
              pokeTypesConstant.forEach(type => newActiveTypes[type] = !allActive);
              setActiveTypes(newActiveTypes)
              setAllActive(!allActive);
            }}
          />
          <label for={'allTypes'}>All</label>
          {renderTypeCheckboxes()}
        </div>
      </div>
      {typeError.hasError ? <p>{typeError.errorMsg}</p> : null}
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