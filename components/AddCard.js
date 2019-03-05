import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/decks'
import { addCard } from '../utils/api'
import { NavigationActions } from 'react-navigation'



class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestionChange = (question) =>{
    this.setState({ question })
  }

  handleAnswerChange = (answer) =>{
    this.setState({ answer })
  }

  submit = () =>{
    const { dispatch, deckName } = this.props
    const { question, answer } = this.state
    const query = {question, answer}

    addCard(deckName, query)

    dispatch(handleAddCard(deckName, query))

    this.setState({question:'', answer:''})

    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'DeckEdit',
    }))
  }

  render(){
    const { deck, deckName } = this.props
    const { question, answer } = this.state

    return(
      <View>
        <View>
          <Text style={styles.prompts}>Please Enter Your Question</Text>
          <TextInput
          style={styles.userInput}
          placeholder='Enter Question'
          onChangeText={this.handleQuestionChange}
          value={question}
          />
          <Text style={styles.prompts}>Please Enter Your Answer</Text>
          <TextInput
          style={styles.userInput}
          placeholder='Enter Answer'
          onChangeText={this.handleAnswerChange}
          value={answer}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttons} onPress={this.submit}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  prompts:{
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  userInput:{
    height: 40,
    width: 320,
    borderColor:'gray',
    borderWidth:1,
    margin: 15,
    alignSelf:'center',
    textAlign: 'center'
  },
  buttons: {
    alignSelf: 'center',
    width: 150,
    margin: 15,
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'darkgreen',
    backgroundColor:'green',
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
  const deckName= navigation.state.params.deck
  const deck = decks.decks[deckName]
  return{
    deck,
    deckName,
  }
}
export default connect (mapStateToProps)(AddCard)
