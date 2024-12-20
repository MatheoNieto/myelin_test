import {DarkTheme, DefaultTheme} from '@react-navigation/native';

import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {QueryClientProvider} from '@tanstack/react-query';

import {useColorScheme} from '@/hooks/useColorScheme';
import {queryClient} from '@/constants/queryClient';
import ThemeProvider from '@/theme/ThemeProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter.ttf'),
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="index" options={{headerShown: false}} />
          <Stack.Screen name="screens/planner" />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
