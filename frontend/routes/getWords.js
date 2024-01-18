import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const GetWords = () => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetchData();
    }, []);
 
    const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:3000/api/getWords');
        setData(response.data);
        } catch (e)
        {
        console.log('Error fetching data: ', e);
        }
    
    };

    return (
        <View>
            <Text>{JSON.stringify(data)}</Text>
            <Text>Beans</Text>
        </View>
    );
}

export default GetWords;


