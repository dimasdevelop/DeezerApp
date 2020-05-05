/** @format */
// setWidth

import React, { Component } from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

import ProgressBar from '../components/componentsApp/ProgressBar'

import Carrousel from '../components/album/Carrousel'

class Home extends Component {
	state = {
		albums: [],
		tracks: [],
		artists: [],
		playlists: [],
	}
	componentDidMount() {
		console.log('componentDidMount Home')
		axios.get('https://api.deezer.com/chart/0/playlists').then((response) =>
			this.setState({
				playlists: response.data.data,
			})
		)

		axios.get('https://api.deezer.com/chart/0/tracks').then((response) =>
			this.setState({
				tracks: response.data.data,
			})
		)

		axios.get('https://api.deezer.com/chart/0/artists').then((response) =>
			this.setState({
				artists: response.data.data,
			})
		)

		axios.get('https://api.deezer.com/chart/0/albums').then((response) =>
			this.setState({
				albums: response.data.data,
			})
		)
	}

	renderData() {
		if (
			this.state.artists[0] &&
			this.state.albums[0] &&
			this.state.playlists[0] &&
			this.state.tracks[0]
		) {
			return (
				<View>
					<Carrousel
						key={this.state.artists[0].id}
						title='Los Mejores Artistas'
						element={this.state.artists}
						navigation={this.props.navigation}
					/>
					<Carrousel
						key={this.state.albums[0].id}
						title='Albumes Recomendados'
						element={this.state.albums}
						navigation={this.props.navigation}
					/>
					<Carrousel
						key={this.state.tracks[0].id}
						title='La musica mas escuchada'
						element={this.state.tracks}
						navigation={this.props.navigation}
					/>
					<Carrousel
						key={this.state.playlists[0].id}
						title='Playlists Populares'
						element={this.state.playlists}
						navigation={this.props.navigation}
					/>
				</View>
			)
		} else {
			return <ProgressBar />
		}
	}
	render() {
		return (
			<View style={styles.contentContainer}>
				<ScrollView>{this.renderData()}</ScrollView>
			</View>
		)
	}
}

const styles = {
	contentContainer: {
		backgroundColor: '#242424',
		flex: 1,
	},
}
export default Home
