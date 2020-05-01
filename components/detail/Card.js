/** @format */

import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
	return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
	containerStyle: {
		// borderWidth: 0.5,
		// borderRadius: 3,
		// borderColor: '#F7F6F7',
		// backgroundColor: '#F7F6F7',
		// paddingTop: 14.6,
		// borderBottomWidth: 0,
		// elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,

		// height: 150,
	},
}

export default Card
