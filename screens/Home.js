/** @format */
// const API = require('animeflv-scrapper')

import React, { Component } from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

import ProgressBar from '../components/componentsApp/ProgressBar'

import Album from '../components/album/Album'

class Home extends Component {
	state = { albums: [] }
	componentDidMount() {
		console.log('componentDidMount Home')
		axios.get('https://api.deezer.com/chart').then((response) =>
			this.setState({
				albums: response.data.tracks.data,
			})
		)
	}

	renderAlbums() {
		if (this.state.albums[0]) {
			return (
				<ScrollView>
					{this.state.albums.map((element) => (
						<Album key={element.title} element={element} navigation={this.props.navigation} />
					))}
				</ScrollView>
			)
		} else {
			return <ProgressBar />
		}
	}
	render() {
		return this.renderAlbums()
	}
}

export default Home
