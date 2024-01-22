import { View, Text, Image,} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'

const WeatherScreen = ({ navigation }) => {

    const [weather,setWeather] = useState([])

    useEffect(() => {
        const ax = async () => {
            const resp = await axios.get(
              "https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=05abf85529bfdb321b2ca9f97f52d0b8"
            );
            setWeather(resp.data);        }
        ax()
    }, [])
    console.log(weather)
    
  return (
    <View>
        <Text>WeatherScreen</Text>
        <Text>{weather.name}</Text>
        <Text>{weather.main?.temp}</Text>
        <Text>{weather.weather?.[0].description}</Text>
        <Image
            style={{ width: 50, height: 50 }}
            source={{
            uri: `http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`,
            }}
        />
    </View>
  );
}

export default WeatherScreen
