import React, { FC } from 'react';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Image } from 'react-native';

import { tw } from '@lib/tailwind';

import { getOnePokemon } from '../../actions/list.action';
import { useAppDispatch } from '../../store/configureStore';

interface IProps {
  name: string;
  id: number;
}

export const ItemComponent: FC<IProps> = ({ name, id }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleRedirect = () => {
    dispatch(getOnePokemon({ name }));
    navigation.navigate('PokemonScreen');
  };

  return (
    <TouchableOpacity
      style={tw`border border-white p-3 rounded-md w-[45%] items-center justify-center mb-5 mx-[2.5%]`}
      onPress={handleRedirect}
    >
      <Image
        style={tw`w-20 h-20 mb-5`}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}
      />
      <Text style={tw`text-base text-white font-primary-semi-bold`}>{name}</Text>
    </TouchableOpacity>
  );
};
