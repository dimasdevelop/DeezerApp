/** @format */
// const API = require('animeflv-scrapper')

import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const Album = ({ element, navigation }) => {
	const { title, album, artist, link } = element

	return (
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image style={styles.thumbnailStyle} source={{ uri: album.cover_medium }} />
				</View>
				<View style={styles.headerContentStyle}>
					<Text style={styles.headerTextStyle}>{title}</Text>
					<Text>{artist.name}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Button onPress={() => navigation.navigate('Detail', { element: element })}>
					Detalle
				</Button>
			</CardSection>
		</Card>
	)
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	headerTextStyle: {
		fontSize: 18,
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
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
