import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { tw } from '@lib/tailwind';

import { PurpleButton, PurpleNegativeButton } from '../../components/CoreComponents/buttons';
import { CircleWithIconButton } from '../../components/CoreComponents/buttons/circleWithIcon.button';
import { InputDate } from '../../components/CoreComponents/form/input-date';
import { TemplateContainer } from '../../components/CoreComponents/templates/template.container';
import { headerTitleLayouts } from '../../navigation/header-navigation-tabs/header.navigation';
import { setBirthDate } from '../../reducers/auth.slice';
import { useAppDispatch, useAppSelector } from '../../store/configureStore';

export const BirthdateChangeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { birthDate } = useAppSelector((store) => store.auth);

  const [dateValue, setDateValue] = useState(birthDate || '');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const isButtonDisabled = !dateValue.length || dateValue === birthDate;

  const handleClick = () => {
    dispatch(setBirthDate(dateValue));
    navigation.navigate('SettingsScreen');
  };

  const openDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const onConfirmDate = (date: Date) => {
    closeDatePicker();
    setDateValue(moment(date).format('DD MMMM YYYY'));
  };

  return (
    <TemplateContainer
      options={{
        headerCenter: headerTitleLayouts('BirthdateScreen'),
        headerLeft: <CircleWithIconButton onClick={() => navigation.goBack()} icon="back" />,
      }}
    >
      <View style={tw`h-full`}>
        <InputDate value={dateValue} placeholder={'Select your birthdate'} />

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={onConfirmDate}
          onCancel={closeDatePicker}
          maximumDate={new Date()}
        />

        <View style={tw`mt-4 flex-row justify-between`}>
          <PurpleNegativeButton
            onClick={openDatePicker}
            title={'Select Date'}
            margin={'m-0'}
            maxWidth={'max-w-[48%]'}
          />
          <PurpleButton
            onClick={handleClick}
            title={'Save'}
            disabled={isButtonDisabled}
            margin={'m-0'}
            maxWidth={'max-w-[48%]'}
          />
        </View>
      </View>
    </TemplateContainer>
  );
};
