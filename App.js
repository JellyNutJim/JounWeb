import { StatusBar } from 'expo-status-bar';
import { Switch } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';




const storeData =  (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const retrieveData = (key) => {
    return JSON.parse((localStorage.getItem(key)));
};

// Get user set theme
var c = retrieveData('@theme');
if (c == undefined) { c = true; }

export default function App() {

  const [theme, setTheme] = useState(c);

  useEffect(() => {
    storeData('@theme', theme);
  });
  
  let sty;

  switch(theme)
  {
    case true:
      sty = styles.darkMode;
      break;
    case false:
      sty = styles.lightMode;
      break;
  }

  return (
    <NavigationContainer
    documentTitle={{
      formatter: () =>
        `Joun Board`,
    }}>

    <View style={sty}>
      <Image style={{width: 100, height: 100}} source={require('/assets/JounG_B.gif')}/>

        <Switch
        value={theme}
        onValueChange={(value) => setTheme(value)}
      />
      <StatusBar style="auto" />
    </View>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  darkMode:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightMode:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
