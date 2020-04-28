/** @format */
// const API = require('animeflv-scrapper')

import React, { Component } from 'react'
import { Image, ImageBackground, StyleSheet, Text, FlatList, View, Button } from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

import Card from '../components/album/Card'
import CardSection from '../components/album/CardSection'

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			element: props.route.params.element,
		}
	}

	render() {
		const element = this.state.element
		console.log(element)
		return (
			// <View>
			// 	<Card>
			// 		<CardSection>
			// 			<View style={styles.thumbnailContainerStyle}>
			// 				<Image
			// 					style={styles.thumbnailStyle}
			// 					source={{ uri: element.artist.picture }}
			// 				/>
			// 			</View>
			// 			<View style={styles.headerContentStyle}>
			// 				<Text style={styles.headerTextStyle}>Artista</Text>
			// 				<Text>{element.artist.name}</Text>
			// 			</View>
			// 		</CardSection>
			// 	</Card>
			// </View>

			<View style={{ flex: 1, maxHeight: 200 }}>
				<ImageBackground source={{ uri: element.album.cover_xl }} style={styles.image}>
					<View>
						<Image
							style={styles.thumbnailStyle}
							source={{ uri: element.artist.picture_xl }}
						/>

						<Text style={styles.headerTextStyle}>{element.artist.name}</Text>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

const styles = {
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	headerContentStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	headerTextStyle: {
		position: 'absolute',

		left: 110,
		top: 56,

		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 36,
		lineHeight: 40,
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		letterSpacing: -0.015,

		color: '#F0F0F0',
	},
	thumbnailStyle: {
		position: 'absolute',
		width: 128,
		height: 128,
		left: 127.19,
		top: 15,
		bottom: 20,
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
export default Detail
