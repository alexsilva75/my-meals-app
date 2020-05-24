import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import {enableScreens} from 'react-native-screens'

import MealsNavigator from './navigation/MealsNavigator'

enableScreens()


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={err => console.log(err)}
    />)
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
