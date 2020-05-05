/** @format */
// const API = require('animeflv-scrapper')

import React from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const Album = ({ element, navigation }) => {
	const onPress = () => navigation.navigate('Detail', { element: element })

	const infoElement = () => {
		if (!element.title) {
			return (
				<View>
					<Text style={styles.headerOneTextStyle}> {element.artistName}</Text>

					<Text>{element.title}</Text>
				</View>
			)
		} else {
			return (
				<View>
					<Text style={styles.headerTextStyle}>{element.title}</Text>
					<Text>{element.artistName}</Text>
				</View>
			)
		}
	}
	const imgBackground = () => {
		if (element.image) {
			return element.image
		} else {
			return element.artistImage
		}
	}

	return (
		<TouchableOpacity onPress={onPress}>
			<Card>
				<ImageBackground source={{ uri: imgBackground() }} style={styles.backGroud}>
					<View style={styles.CardSection}>
						<CardSection>
							<View style={styles.headerContentStyle}>{infoElement()}</View>
						</CardSection>
					</View>
				</ImageBackground>
			</Card>
		</TouchableOpacity>
	)
}

const styles = {
	backGroud: {
		flex: 3,
		resizeMode: 'cover',
		justifyContent: 'center',
		borderStyle: 'solid',

		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	headerTextStyle: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#273746',
	},
	headerOneTextStyle: {
		top: '29.5%',

		fontSize: 17,
		fontWeight: 'bold',
		color: '#273746',
	},
	CardSection: {
		width: '100%',
		height: 80,
		top: '67.5%',

		position: 'absolute',
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null,
	},
}
export default Album
