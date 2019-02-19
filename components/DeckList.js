import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { fetchDecks } from '../utils/api'

class DeckList extends Component {
  state= {
    decks: {}
  }
  componentDidMount(){
    fetchDecks()
      .then((entries)=>this.setState({decks: JSON.parse(entries)}))
      .catch((e)=>console.log('error ', e))
      .then(()=>{
        const { decks } = this.state
        console.log(Object.keys(decks))
      })
  }

  render() {
    const { decks } = this.state
    return(
      <View>
      <Text>DeckList</Text>
        {Object.keys(decks).map(deck=>{
          console.log(decks[deck])
          return(
            <Text key={deck}>{decks[deck].title}</Text>
          )
        })}
      </View>
    )
  }
}

export default DeckList
