import React, { Component } from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/header';
import SuggestionList from './src/videos/containers/suggestion-list';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
			<Home>
				<Header>
				</Header>
				<Text>buscador</Text>
				<Text>categorías</Text>
				<SuggestionList />
			</Home>
    );
  }
}
