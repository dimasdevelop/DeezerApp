/** @format */

import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
	return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
	containerStyle: {
		borderRadius: 2,

		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		height: 160.5,
		width: 185,
		maxHeight: 160.5,
		maxWidth: 185,
		backgroundColor: '#fff',
	},
}

export default Card
