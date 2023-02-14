import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { getPokemonsList } from '../../actions/list.action';
import { CircleButton } from '../../components/CoreComponents/buttons/circle.button';
import { DefaultButton } from '../../components/CoreComponents/buttons/default.button';
import { TemplateContainer } from '../../components/CoreComponents/templates/template.container';
import { TextDescription } from '../../components/CoreComponents/text/text-description';
import { ItemComponent } from '../../components/item/item.component';
import { SearchInputComponent } from '../../components/seacrhInput/searchInput.component';
import { headerTitleLayouts } from '../../navigation/header-navigation-tabs/header.navigation';
import { updateCurrentView, updatePagination } from '../../reducers/pokemons.slice';
import { useAppDispatch, useAppSelector } from '../../store/configureStore';

export const ListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { listCurrentView, listFilteredPokemons } = useAppSelector((state) => state.list);

  const isButtonDisabled = listCurrentView?.length === listFilteredPokemons.length;

  useEffect(() => {
    dispatch(getPokemonsList());
  }, []);

  const loadMore = () => {
    const countItems = (Math.round(listCurrentView.length / 12) + 1) * 12;
    dispatch(updatePagination({ end: countItems }));
    dispatch(updateCurrentView());
  };

  if (!listCurrentView.length) return <></>;

  return (
    <TemplateContainer
      options={{
        headerCenter: headerTitleLayouts('Your Pokemons'),
        headerRight: (
          <CircleButton onClick={() => navigation.navigate('SettingsScreen')} icon="setting" />
        ),
      }}
    >
      <View style={tw`h-full pb-20`}>
        <SearchInputComponent />
        <FlatList
          numColumns={2}
          data={listCurrentView}
          renderItem={({ item }) => <ItemComponent id={item.id} name={item.name} />}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={<TextDescription>Pokemons Not Found</TextDescription>}
          ListFooterComponent={
            <DefaultButton
              title="Load More"
              onClick={loadMore}
              disabled={isButtonDisabled}
              bgColor="bg-primary500"
            ></DefaultButton>
          }
        />
      </View>
    </TemplateContainer>
  );
};
