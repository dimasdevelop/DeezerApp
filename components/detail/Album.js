/** @format */
// const API = require('animeflv-scrapper')

import React from 'react'
import { Text, View, Image, Linking, ImageBackground } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import DetailButton from './DetailButton'

const Album = ({ element, navigation, Ionicons }) => {
	const { title, album, artist, link } = element

	return (
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image style={styles.thumbnailStyle} source={{ uri: album.cover_medium }} />
				</View>
				<View style={styles.headerContentStyle}>
					<Text style={styles.headerTextStyle}>{title}</Text>
					<Text style={styles.subHeaderTextStyle}>{artist.name}</Text>
				</View>
				<View style={styles.button}>
					<DetailButton onPress={() => Linking.openURL(link)}>
						<Ionicons name='md-headset' size={19} style={{ marginBottom: -5 }} />
					</DetailButton>
				</View>
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
		fontFamily: 'Do Hyeon',
		color: '#EAECEE',
		fontStyle: 'normal',
		fontWeight: 'bold',
	},
	subHeaderTextStyle: {
		fontSize: 14,
		fontFamily: 'Do Hyeon',
		color: '#ABB2B9',
		fontStyle: 'normal',
		fontWeight: 'normal',
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
	backGroud: {
		flex: 3,
		resizeMode: 'cover',
		justifyContent: 'center',
		borderStyle: 'solid',

		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null,
	},
	button: {
		left: 320.8,
		top: 7.8,
		position: 'absolute',
	},
}
export default Album
