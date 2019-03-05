import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { removeDeck } from '../utils/api'
import { removeD } from '../actions/decks'
import Questions from '../components/Questions'

class DeckEdit extends Component {

  render(){
    const { list, deck, navigation } = this.props

      return(
        <View style={styles.container}>
          <View>
            <Text style={styles.deckHeader}>DeckEdit</Text>
            <Text style={styles.deckName}>{deck}</Text>
            <Text style={styles.deckHeader}>{list[deck].questions.length} cards</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate(
              'AddCard',
              { deck }
            )}>
              <Text>Add Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate(
              'RemoveConfirm',
              { deck }
            )}>
              <Text>Remove Deck</Text>
            </TouchableOpacity>
          </View>
          <Questions deck={list[deck]}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'stretch',
  },
  deckHeader:{
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  deckName: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    margin: 15,
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor:'lightgray',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  }
})

function mapStateToProps (state, {navigation}) {
  const list = state.decks
  const deck = navigation.state.params.deck.title
  return{
    deck,
    list,
    state
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  const deck  = navigation.state.params.deck.title
  return {
    remove: ()=> dispatch(removeD(deck)),
    goBack: () => navigation.navigate(
      'DeckList'
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckEdit)
