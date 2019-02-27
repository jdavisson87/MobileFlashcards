import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

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

  render(){
    const { decks, deck } = this.props
    const questionLength = decks.decks[deck].questions.length

    return(
      <View>
        <View>
          <Text style={styles.deckHeader}>DeckEdit</Text>
          <Text style={styles.deckName}>{deck}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttons}>
            <Text>Add Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text>Remove Deck</Text>
          </TouchableOpacity>
        </View>
        <View>
          {questionLength===0
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
    decks
  }
}

export default connect(mapStateToProps)(DeckEdit)
