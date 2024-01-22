import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

const NewsScreen = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios
          .get(
            "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=WTGXkUKTDZxO5o0Nhk68DwoTb10wOozQ"
          )
          .then((res) => setNews(res.data.results));
    }, [])
    console.log(news)
  return (
      <View>
            <Text>NewsScreen</Text>
            {news.map((item) => (
                <View key={item.title}>
                <Text>{item.title}</Text>
                <Text>{item.abstract}</Text>
                <Text>{item.byline}</Text>
                <Text>{item.published_date}</Text>
                </View>
            ))}
    </View>
  )
}

export default NewsScreen
