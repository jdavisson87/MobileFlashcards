import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { removeDeck } from '../utils/api'
import { removeD } from '../actions/decks'
import Questions from '../components/Questions'

class DeckEdit extends Component {

  state= {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start()
  }

  render(){
    const { list, deck, navigation } = this.props
    let { fadeAnim } = this.state

      return(
        <Animated.View style={[{opacity: fadeAnim},styles.container]}>
          <View>
            <Text style={styles.deckHeader}>DeckEdit</Text>
            <Text style={styles.deckName}>{deck}</Text>
            <Text style={styles.deckHeader}>{list[deck] && list[deck].questions.length} cards</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.buttons, styles.addbtn]} onPress={() => navigation.navigate(
              'AddCard',
              { deck }
            )}>
              <Text style={styles.txt}>Add Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, styles.startbtn]} onPress={() => navigation.navigate(
              'QuizView',
              { deck }
            )}>
              <Text style={styles.txt}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, styles.removebtn]} onPress={() => navigation.navigate(
              'RemoveConfirm',
              { deck }
            )}>
              <Text style={styles.txt}>Remove Deck</Text>
            </TouchableOpacity>
          </View>
          <Questions deck={list[deck]}/>
        </Animated.View>
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
    margin: 10,
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  addbtn:{
    backgroundColor: 'blue',
    borderColor: 'darkblue'
  },
  startbtn:{
    backgroundColor: 'green',
    borderColor: 'darkgreen'
  },
  removebtn: {
    backgroundColor: 'red',
    borderColor: 'darkred'
  },
  txt:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
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
