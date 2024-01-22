import React,{useEffect,useState} from 'react'
import { View, Text, Button,  } from 'react-native'

const HomeScreen = ({navigation}) => {
    const [date,setDate] = useState([])

    useEffect(() => {
      const today = new Date();
      //get the week of the year
        const week = Math.ceil((((today - new Date(today.getFullYear(), 0, 1)) / 86400000) + 1) / 7);
              const date = today.toLocaleDateString("sv-SE", {
                day: "numeric",
                month: "long",
              });
        



      setDate({ week:week,date: date });
    }, [])

    

  return (
      <View>
          <Text>Vecka:{date.week}</Text>
          <Text>Datum:{date.date}</Text>

          <Button title="Weather" onPress={() => navigation.navigate('Weather')} />
            <Button title="News" onPress={() => navigation.navigate('News')} />
        </View>
  )
}

export default HomeScreen
