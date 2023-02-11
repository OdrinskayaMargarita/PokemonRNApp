import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import { tw } from '@lib/tailwind';

import { CircleWithIconButton } from '../../components/CoreComponents/buttons/circleWithIcon.button';
import { TemplateContainerScroll } from '../../components/CoreComponents/templates/template.container-scroll';
import { TextDescription } from '../../components/CoreComponents/text/text-description';
import { headerTitleLayouts } from '../../navigation/header-navigation-tabs/header.navigation';
import { clearActivePokemon } from '../../reducers/pokemons.slice';
import { useAppDispatch, useAppSelector } from '../../store/configureStore';
import { ItemAbility, ItemStat } from '../../types';

export const PokemonScreen = () => {
  const navigation = useNavigation();
  const { activePokemon } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearActivePokemon());
    };
  }, [dispatch]);

  if (!activePokemon) return <></>;

  return (
    <TemplateContainerScroll
      options={{
        headerCenter: headerTitleLayouts(activePokemon.name),
        headerLeft: <CircleWithIconButton onClick={() => navigation.goBack()} icon="back" />,
        headerRight: (
          <CircleWithIconButton
            onClick={() => navigation.navigate('SettingsScreen')}
            icon="setting"
          />
        ),
      }}
    >
      <View style={tw`h-full`}>
        <View style={tw`items-center justify-center`}>
          <Image
            style={tw`w-50 h-50 mb-5`}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${activePokemon.id}.png`,
            }}
          />
        </View>

        {activePokemon.stats.map((item: ItemStat, key: number) => (
          <View style={tw`flex-row items-center justify-between px-2 mb-3`} key={key}>
            <TextDescription sizeText={'text-base'} weightText={'font-primary-bold'}>
              {item.stat.name}
            </TextDescription>
            <TextDescription sizeText={'text-base'} weightText={'font-primary-bold'}>
              {item.base_stat}
            </TextDescription>
          </View>
        ))}

        <View style={tw`flex items-center justify-center py-3 border-b border-primary100`}>
          <TextDescription sizeText={'text-base'} weightText={'font-primary-bold'}>
            Weight : {activePokemon.weight}
          </TextDescription>
        </View>
        <View style={tw`flex items-center justify-center py-3 border-b border-primary100`}>
          <TextDescription sizeText={'text-base'} weightText={'font-primary-bold'}>
            Height : {activePokemon.height}
          </TextDescription>
        </View>
        <View style={tw`flex items-center justify-center py-3 border-b border-primary100`}>
          <TextDescription sizeText={'text-base'} weightText={'font-primary-bold'}>
            Abilties
          </TextDescription>
          {activePokemon.abilities.map((item: ItemAbility, key: number) => (
            <TextDescription sizeText={'text-base'} key={key}>
              - {item.ability.name}
            </TextDescription>
          ))}
        </View>
      </View>
    </TemplateContainerScroll>
  );
};
