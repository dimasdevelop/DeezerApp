/** @format */

import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
	return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
	containerStyle: {
		padding: 5,
		// backgroundColor: '#F7F6F7',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',

		flex: 1,
	},
}

export default CardSection
