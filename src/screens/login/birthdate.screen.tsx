import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { tw } from '@lib/tailwind';

import { PurpleButton, PurpleNegativeButton } from '../../components/CoreComponents/buttons';
import { InputDate } from '../../components/CoreComponents/form/input-date';
import { TemplateContainer } from '../../components/CoreComponents/templates/template.container';
import { headerTitleLayouts } from '../../navigation/header-navigation-tabs/header.navigation';
import { setBirthDate } from '../../reducers/auth.slice';
import { useAppDispatch } from '../../store/configureStore';

export const BirthdateScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [dateValue, setDateValue] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const isButtonDisabled = !dateValue.length;

  const handleClick = () => {
    dispatch(setBirthDate(dateValue));
    navigation.navigate('BirthdateScreen');
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
            title={'Continue'}
            disabled={isButtonDisabled}
            margin={'m-0'}
            maxWidth={'max-w-[48%]'}
          />
        </View>
      </View>
    </TemplateContainer>
  );
};
