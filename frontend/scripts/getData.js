import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
        //<Image style={{aspectRatio: '1/1', height: '85%', borderWidth: 0, borderRadius: '50%', marginHorizontal: 10,}} source={require('/assets/' + props.img)}/>
const Block = props => {
    var imgURL = "";
    if (props.hash == null)
    {
        imgURL = require('../assets/default.png');
        
    }
    else
    {
        imgURL = {uri: "http://cdn.discordapp.com/avatars/" + props.id + "/" + props.hash + ".png"};
    }
    return(
      <View style={props.sty}>
        <Image style={{aspectRatio: '1/1', height: '85%', borderWidth: 0, borderRadius: '50%', marginHorizontal: 10,}} source={imgURL}/>
        <Text style={[{flex: 1}, props.textColor]}>{props.name}</Text>
        <Text style={[{flex: 1, textAlign: 'center'}, props.textColor]}>{props.num}</Text>
    </View>
    );
};

var boxC;
var textC;
var d;

const GetData = props => {
    const [data, setData] = useState([]);
    console.log(data);

    // Set Theme Colours
    if (props.theme == true)
    {
        boxC = sty.boxDark;
        textC = sty.whiteText;
    }
    else
    {
        boxC = sty.boxLight;
        textC = sty.blackText;
    }

    if (props.data == 'w')
    {   
        d = 'getWords';
    }
    else
    {
        d = 'getUsers';
    }

    useEffect(() => {
        fetchData();
    }, []);
 
    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:3000/api/' + d);
            setData(JSON.parse(response.data)['users']);
        } catch (e)
        {
            console.log('Error fetching data: ', e);
        }
    
    };

    return (
        <View>
            {data.map(item => (
                <Block key={item[0]} id={item[0]} hash={item[1]} name={item[2]} num={item[3]}  sty={boxC} textColor={textC} ></Block>
            ))}
        </View>
    );
}

const sty = StyleSheet.create({
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


  export default GetData;
