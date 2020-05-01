/** @format */

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const DetailButton = ({ onPress, children }) => {
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
		height: 45,
		width: 45,

		borderRadius: 60,
		marginLeft: 5,
		marginRight: 5,
	},
	textStyle: {
		alignSelf: 'center',
		color: '#808B96',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		shadowColor: '#808B96',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
}
export default DetailButton
