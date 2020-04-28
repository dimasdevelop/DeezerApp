/** @format */

import React, { Component } from 'react'
import { View, Text, ProgressBarAndroid } from 'react-native'

export default class ProgressBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: props.title,
			color: props.color,
		}
	}

	constructorTitle() {
		if (this.state.title) {
			return (
				<View>
					<Text
						style={{
							fontSize: 25,
							fontWeight: 'bold',
							color: 'black',
						}}>
						{this.state.title}
					</Text>
				</View>
			)
		}
	}
	colorProgress() {
		if (this.state.color) {
			return this.state.color
		} else {
			return '#B0F2B4'
		}
	}
	render() {
		return (
			<View style={{ alignSelf: 'center', padding: 10 }}>
				{this.constructorTitle()}
				<View
					style={{
						flex: 1,
						justifyContent: 'space-evenly',
						padding: 20,
					}}>
					<ProgressBarAndroid
						animating={true}
						color={this.colorProgress}
					/>
				</View>
			</View>
		)
	}
}
