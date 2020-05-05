/** @format */
// const API = require('animeflv-scrapper')

import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Album from './Album'

const Carrousel = ({ title, element, navigation }) => {
	return (
		<View style={styles.contentCarrousel}>
			<View style={styles.titleContentCarrousel}>
				<Text style={styles.titleCarrousel}>{title}</Text>
			</View>
			<ScrollView
				horizontal={true}
				contentContainerStyle={{ paddingLeft: 3 }}
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={200}
				decelerationRate='fast'
				pagingEnabled>
				{element.map((element) => {
					let data
					if (element.type == 'track') {
						data = {
							image: element.album.cover_medium,
							title: element.title,
							link: element.link,
							artistName: element.artist.name,
							tracklist: element.artist.tracklist,
							artistImage: element.artist.picture_xl,
						}
					} else if (element.type == 'album') {
						data = {
							image: element.cover_medium,
							title: element.title,
							link: element.link,
							artistName: element.artist.name,
							tracklist: element.tracklist,
							artistImage: element.artist.picture_xl,
						}
					} else if (element.type == 'artist') {
						data = {
							artistName: element.name,
							tracklist: element.tracklist,
							artistImage: element.picture_xl,
						}
					} else if (element.type == 'playlist') {
						data = {
							image: element.picture_medium,
							title: element.title,
							link: element.link,

							tracklist: element.tracklist,
						}
					}

					return <Album key={element.id} element={data} navigation={navigation} />
				})}
			</ScrollView>
		</View>
	)
}

const styles = {
	contentCarrousel: {
		marginTop: 10,
		marginBottom: 20,
	},
	titleContentCarrousel: {
		marginLeft: 3,
		marginTop: 10,
	},
	titleCarrousel: {
		marginLeft: 5,
		fontSize: 25,
		fontFamily: 'Do Hyeon',
		color: '#EAECEE',
		fontStyle: 'normal',
		fontWeight: 'bold',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
}
export default Carrousel
