import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckEdit extends Component {
  render(){
    const { decks, deck } = this.props
    console.log('😈', decks.decks[deck])
    if(decks.decks[deck].questions.length>0){
      return(
        <View>
          <Text>DeckEdit</Text>
          <Text>{deck}</Text>
        </View>
      )
    }else{
      return(
        <View>
          <Text>{deck}</Text>
          <Text>You currently don't have any cards in this deck.</Text>
          <Text>Please add cards to this deck.</Text>
        </View>
      )
    }
  }
}

function mapStateToProps (decks, {navigation}) {
  const deck= navigation.state.params.deck.title

  return{
    deck,
    decks
  }
}

export default connect(mapStateToProps)(DeckEdit)
