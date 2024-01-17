import { StatusBar } from 'expo-status-bar';
import { Switch } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import './App.css';

// Change main width based on whether width < height - if so then thin screen
//n backen json [words], quantity, 


// Example Data
var user1 = ['1', 'Joun_Black.png', 'TitanCarrot', 32];
var user2 = ['2', 'Joun_Black.png', 'dankmemerjake', 15];
var user3 = ['3', 'Joun_Black.png', '121212423', 334];
var user4 = ['4', 'Joun_Black.png', '12124324', 18];
var user5 = ['1', 'Joun_Black.png', 'TitanCarrot', 32];
var user6 = ['2', 'Joun_Black.png', '121212342', 15];
var user7 = ['3', 'Joun_Black.png', '121212423', 334];
var user8 = ['4', 'Joun_Black.png', '12124324', 18];

var users = [user1, user2, user3, user4, user5, user6, user7, user8];


const storeData =  (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const retrieveData = (key) => {
    return JSON.parse((localStorage.getItem(key)));
};


const Block = props => {
  return(
    <View style={props.sty}>
      <Image style={{aspectRatio: '1/1', height: '85%', borderWidth: 0, borderRadius: '50%', marginHorizontal: 10,}} source={require('/assets/' + props.img)}/>
      <Text style={[{flex: 1}, props.textColor]}>{props.name}</Text>
      <Text style={[{flex: 1, textAlign: 'center'}, props.textColor]}>{props.num}</Text>
  </View>
  );
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
  let styBox;
  let styText;

  switch(theme)
  {
    case true:
      styTheme = styles.darkMode;
      styBox = styles.boxDark;
      styText = styles.whiteText;
      document.body.classList.add('bg-black');
      if (document.body.classList.contains('bg-white')) {
        document.body.classList.remove('bg-white');
      }
      break;
    case false:
      styTheme = styles.lightMode;
      styBox = styles.boxLight;
      styText = styles.blackText;
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

      {users.map(item => (
        <Block key={item[0]} sty={styBox} textColor={styText} img={item[1]} name={item[2]} num={item[3]}></Block>
      ))}

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