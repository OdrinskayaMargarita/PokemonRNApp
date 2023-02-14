import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import { tw } from '@lib/tailwind';

import { filterList, resetFilter } from '../../reducers/pokemons.slice';
import { useAppDispatch } from '../../store/configureStore';
import { DefaultButton } from '../CoreComponents/buttons/default.button';
import { InputComponent } from '../CoreComponents/form/input-component';

export const SearchInputComponent = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!valueInput.length) handleClear();
  }, [valueInput]);

  const handleClick = () => {
    dispatch(filterList({ nameSearch: valueInput.toLowerCase().trim() }));
  };

  const handleClear = () => {
    setValueInput('');
    dispatch(resetFilter());
  };

  return (
    <View style={tw`mb-5`}>
      <InputComponent value={valueInput} onChange={setValueInput} placeholder="Search" />
      <DefaultButton title="Search" onClick={handleClick} bgColor="bg-primary500"></DefaultButton>
      {valueInput.length ? (
        <DefaultButton onClick={handleClear} title="Reset" bgColor="bg-primary700" />
      ) : null}
    </View>
  );
};
