import { StatusBar } from 'expo-status-bar';
import { Switch } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import './App.css';

// Get route scripts
import GetData from './scripts/getData';

// Change main width based on whether width < height - if so then thin screen
//n backen json [words], quantity, 


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
  
  let styTheme;

  switch(theme)
  {
    case true:
      styTheme = styles.darkMode;
      document.body.classList.add('bg-black');
      if (document.body.classList.contains('bg-white')) {
        document.body.classList.remove('bg-white');
      }
      break;
    case false:
      styTheme = styles.lightMode;
      document.body.classList.add('bg-white');
      if (document.body.classList.contains('bg-black')) {
        document.body.classList.remove('bg-black');
      }
      break;
  }

  return (
    <NavigationContainer
    documentTitle={{
      formatter: () =>
        `Joun Board`,
    }}>

    <View style={styTheme}>
      <Image style={{width: 400, height: 400}} source={require('/assets/JounG_B.gif')}/>
      <GetData theme={theme} data={'u'}/>
      <Switch
        trackColor={{false: 'black', true: 'white'}}
        thumbColor={'black'}
        activeThumbColor={'white'}
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

  boxLight:{
    width: 500,
    height: 60,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  boxDark:{
    width: 500,
    height: 60,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
  },

  whiteText:{
    color: 'white'
  },

  blackText:{
    color: 'black',
  },

});

/*
<View style={styles.boxDark}>
<Image style={{aspectRatio: '1/1', height: '85%', borderWidth: 0, borderRadius: '50%', marginHorizontal: 10,}} source={require('/assets/Joun_Black.png')}/>
<Text style={styles.whiteText}>Bruh</Text>
<Text style={[{flex: 1,   textAlign: 'center',}, styles.whiteText]}>Bruh</Text>
</View>*/