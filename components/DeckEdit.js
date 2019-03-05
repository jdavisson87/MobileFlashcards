import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { removeDeck } from '../utils/api'
import { removeD } from '../actions/decks'
import Questions from '../components/Questions'

function WithCards({deck}) {
  return(
    <ScrollView>
      {deck.questions.map(card=>{
        console.log(card.question)
          return(
            <Questions key={card.question} card={card}/>
          )
        })}
    </ScrollView>
  )
}

function NoCards(){
  return(
    <View style={styles.textCenter}>
      <Text style={styles.textCenter}>You currently don't have any cards in this deck. Please add cards to this deck.</Text>
    </View>
  )
}

class DeckEdit extends Component {

  // state={
  //   questionLength: 0
  // }

  remove = () => {
    const {deck, goBack, remove} = this.props
    //this.setState({questionLength: 0})
    remove()
    goBack()
    removeDeck(deck)

  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'DeckList',
    }))
  }

  // componentWillMount() {
  //   const { list, deck } = this.props
  //   const questionLength = list[deck].questions.length
  //   this.setState({questionLength})
  // }

  render(){
    const { list, deck } = this.props
    // this.setState({questionLength: list[deck].questions.length})
    const questions = list[deck].questions

    console.log('😈', questions)
      return(
        <View style={styles.container}>
          <View>
            <Text style={styles.deckHeader}>DeckEdit</Text>
            <Text style={styles.deckName}>{deck}</Text>
            <Text style={styles.deckHeader}>{questions.length} cards</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate(
              'AddCard',
              { deck }
            )}>
              <Text>Add Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={this.remove}>
              <Text>Remove Deck</Text>
            </TouchableOpacity>
          </View>
          {questions.length>0
            ? <WithCards deck={list[deck]}/>
            : <NoCards/>
          }
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
  //const { deck }= navigation.state.params.deck.title
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
