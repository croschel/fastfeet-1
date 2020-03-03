import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PropTypes from 'prop-types';

import Deliveries from '~/pages/Deliveries';
import Profile from '~/pages/Profile';
import colors from '~/styles/colors';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
	return (
		<>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<Tab.Navigator
				tabBarOptions={{
					activeTintColor: colors.primary,
				}}
			>
				<Tab.Screen
					name="Entregas"
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="reorder" size={size} color={color} />
						),
					}}
					component={Deliveries}
				/>
				<Tab.Screen
					name="Profile"
					options={{
						tabBarLabel: 'Meu Perfil',
						tabBarIcon: ({ color, size }) => (
							<Icon name="account-circle" size={size} color={color} />
						),
					}}
					component={Profile}
				/>
			</Tab.Navigator>
		</>
	);
}