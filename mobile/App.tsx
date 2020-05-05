import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';

import Routes from './src/routes';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Codec': require('./assets/fonts/Codec.ttf'),
//   });
// };

export default function App() {
  // const [fontData, setFontData] = useState(false);
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle="light-content" />
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
  // {!fontData ? (
  //   <AppLoading
  //     startAsync={fetchFonts}
  //     onFinish={() => setFontData(true)}
  //   />
  // ) : (
  //   <Routes/>
  // )}
}
