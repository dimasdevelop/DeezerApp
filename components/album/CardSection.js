/** @format */

import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
	return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
	containerStyle: {
		padding: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
		backgroundColor: 'rgba(255, 250, 255, 0.6)',
	},
}

export default CardSection
