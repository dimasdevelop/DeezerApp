/** @format */
// const API = require('animeflv-scrapper')

import React, { Component } from 'react'
import { Image, ImageBackground, Linking, Text, FlatList, View } from 'react-native'

import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

import ProgressBar from '../components/componentsApp/ProgressBar'
import Album from '../components/detail/Album'
import { Ionicons } from '@expo/vector-icons'

import Button from '../components/detail/Button'

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			element: props.route.params.element,
			tracklist: [],
		}
	}

	componentDidMount() {
		console.log(this.state.element.artist.tracklist)
		axios
			.get(`https://api.deezer.com/artist/${this.state.element.artist.id}/top?limit=50`)
			.catch((error) => console.log(error))
			.then((response) =>
				this.setState({
					tracklist: response.data.data,
				})
			)
	}

	renderData() {
		if (this.state.tracklist[0]) {
			console.log(this.state.element)
			return (
				<View style={styles.conten}>
					{this.state.tracklist.map((element) => (
						<Album
							key={element.title}
							element={element}
							navigation={this.props.navigation}
							Ionicons={Ionicons}
						/>
					))}
				</View>
			)
		} else {
			return (
				<View style={{ height: 75 }}>
					<ProgressBar />
				</View>
			)
		}
	}

	render() {
		const element = this.state.element
		if (!element || !this.state.tracklist[0]) {
			return <ProgressBar />
		} else {
			console.log(this.state.tracklist)

			return (
				<ScrollView style={styles.contentContainer}>
					<View>
						<View style={styles.headerContainer}>
							<ImageBackground
								source={{ uri: element.album.cover_xl }}
								style={styles.backGroud}>
								<View>
									<Image
										style={styles.thumbnailStyle}
										source={{ uri: element.artist.picture_xl }}
									/>

									<Text style={styles.headerTextStyle}>{element.artist.name}</Text>
									<Text style={styles.subHeaderTextStyle}>{element.album.title}</Text>
								</View>
							</ImageBackground>
						</View>
					</View>
					<View style={styles.buttonAling}>
						<Button onPress={() => Linking.openURL(element.link)}>
							<Ionicons name='md-headset' size={25} style={{ marginBottom: -5 }} />
						</Button>
					</View>

					<View>{this.renderData()}</View>
					<View style={{ height: 75 }} />
				</ScrollView>
			)
		}
	}
}

const styles = {
	contentContainer: {
		backgroundColor: '#242424',
		flex: 1,
	},
	headerContainer: {
		flex: 2,
		maxHeight: 170,
		height: 170,
		marginBottom: 15,
	},
	backGroud: {
		flex: 3,
		resizeMode: 'cover',
		justifyContent: 'center',
		borderStyle: 'solid',

		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	thumbnailStyle: {
		position: 'absolute',
		width: 128,
		height: 128,
		left: 8.19,
		top: 20,
		bottom: 20,
		borderRadius: 60,
		backgroundColor: 'transparent',
	},
	conten: {
		flex: 4,
		top: 60,
	},
	headerTextStyle: {
		position: 'absolute',

		left: 139.8,
		top: 82.5,
		fontFamily: 'Do Hyeon',

		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: 25,
		lineHeight: 40,
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		letterSpacing: -0.015,

		color: '#ffffff',
	},

	subHeaderTextStyle: {
		position: 'absolute',

		left: 139.8,
		top: 105.5,
		fontFamily: 'Do Hyeon',

		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 15,
		lineHeight: 40,
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		letterSpacing: -0.015,

		color: '#ffffff',
	},
	buttonAling: {
		left: 330.8,
		top: 175.5,
		position: 'absolute',
	},
}
export default Detail
