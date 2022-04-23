import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import DogsList from '../components/DogsList'

import HeaderBar from '../components/HeaderBar'

const Home = () => {
  return (
      <View>
          <HeaderBar/>
          <Text>Hola Mundo</Text>
          <DogsList/>
      </View>

  )
}

export default Home