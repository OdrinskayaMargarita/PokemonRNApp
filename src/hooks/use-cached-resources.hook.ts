import { useEffect, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { setCustomTextInput, setCustomText } from 'react-native-global-props';

import { tw } from '@lib/tailwind';

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          Inter: require('../assets/fonts/Inter-Regular.ttf'),
          'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
          'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
          'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
          RobotoMono: require('../assets/fonts/RobotoMono-Regular.ttf'),
          'RobotoMono-Bold': require('../assets/fonts/RobotoMono-Bold.ttf'),
          'RobotoMono-Medium': require('../assets/fonts/RobotoMono-Medium.ttf'),
          'RobotoMono-SemiBold': require('../assets/fonts/RobotoMono-SemiBold.ttf'),
        });
        setCustomText({
          style: tw`font-primary`,
        });
        setCustomTextInput({
          style: tw`font-primary`,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
