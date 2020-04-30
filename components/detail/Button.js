/** @format */

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = {
	buttonStyle: {
		flex: 1,
		height: 50,
		width: 50,
		backgroundColor: '#65c32b',

		borderRadius: 60,
		borderWidth: 1,
		borderColor: 'rgba(255, 255, 250, 0.3)',
		marginLeft: 5,
		marginRight: 5,
	},
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
}
export default Button
