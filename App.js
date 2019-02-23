import React from 'react'
import { Text, View } from 'react-native'
import NewDeck from './components/NewDeck'
import DeckList from './components/DeckList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex:1}}>
          <DeckList />
        </View>
      </Provider>
    );
  }
}
