/** @format */
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import Home from '../screens/Home'
import LinksScreen from '../screens/LinksScreen'
import Detail from '../screens/Detail'

import BottomTabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator()

function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='DezeerApp' component={BottomTabNavigator} />
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='HomeScreen' component={HomeScreen} />
				<Stack.Screen name='LinksScreen' component={LinksScreen} />
				<Stack.Screen name='Detail' component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
