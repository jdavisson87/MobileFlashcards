import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { removeDeck } from '../utils/api'
import { removeD } from '../actions/decks'

function WithCards({deck}) {
  return(
    <View >
      <Text>this deck has cards</Text>
    </View>
  )
}

function NoCards({deck}){
  return(
    <View style={styles.textCenter}>
      <Text style={styles.textCenter}>You currently don't have any cards in this deck. Please add cards to this deck.</Text>
    </View>
  )
}

class DeckEdit extends Component {

  remove = () => {
    const {deck, goBack , remove} = this.props
    remove()
    goBack()
    removeDeck(deck)
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'DeckList',
    }))
  }

componentWillMount() {
  const deckName = this.props.deck
  const questionLength = this.props.decks.decks[deckName].questions.length
  this.setState({deckName, questionLength})
}


  render(){
    const { decks, deck } = this.props
    const { deckName, questionLength } = this.state
    return(
      <View>
        <View>
          <Text style={styles.deckHeader}>DeckEdit</Text>
          <Text style={styles.deckName}>{deck}</Text>
          <Text style={styles.deckHeader}>{questionLength} cards</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deck }
          )}>
            <Text>Add Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={this.remove}>
            <Text>Remove Deck</Text>
          </TouchableOpacity>
        </View>
        <View>
          {questionLength>0
            ? <WithCards deck={deck}/>
            : <NoCards deck={deck}/>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

function mapStateToProps (decks, {navigation}) {
  const deck= navigation.state.params.deck.title

  return{
    deck,
    decks,
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
