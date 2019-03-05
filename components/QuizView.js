import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

class QuizView extends Component {
  state={
    correctAnswers: 0,
    questions:[],
    answers: []
  }

  render(){
    const { deckName } = this.props
    console.log('😈', deckName)
    return(
      <View>
        <Text>{deckName}</Text>
      </View>
    )
  }
}

function mapStateToProps(decks, { navigation }){
  const deckName= navigation.state.params.deck
  return{
    deckName,
    decks
  }
}

export default connect(mapStateToProps)(QuizView)
