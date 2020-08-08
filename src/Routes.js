import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Header from './components/Header'
import Navigation from './components/Navigation'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => {
          const flag = route.state?.routeNames[route.state.index]
          return {
            headerShown: flag != 'Home' ? false : true,
            headerTitle: <Header />,
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
          }
        }}>
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
