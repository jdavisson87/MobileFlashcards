import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

class QuizView extends Component {
  state={
    correctAnswers: 0,
    questions:[],
    deckName: '',
    showQuestion: true,

  }

  answer = () => {
    const { showQuestion } = this.state
    this.setState({showQuestion: !showQuestion})
  }

  componentWillMount(){
    const { deckName, decks } = this.props
    const questions = decks.decks[deckName].questions
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)]
    this.setState({ questions, deckName, currentQuestion })
  }

  render(){
    const { deckName, questions, correctAnswers, currentQuestion, showQuestion } = this.state
    return questions.length===0 ? (
        <View>
          <Text style={styles.headerTxt}>{deckName}</Text>
          <Text style={styles.prompt}>You currently don't have any cards in this deck. Please go back and add cards to this deck</Text>
        </View>
      )
      : (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>{deckName}</Text>
          </View>
          <View>
            <Text style={styles.questionHeader}>{showQuestion ? 'Question: ' : 'Answer: '}</Text>
            <Text style={styles.quiz}>{showQuestion ? currentQuestion.question : currentQuestion.answer}</Text>
          </View>
          <View>
          {showQuestion ?
            <View>
              <Text style={{textAlign: 'center', fontSize:16}}>Flip the card to see the answer</Text>
            </View>
            : (
            <View style={styles.btnContainer}>
              <TouchableOpacity style={[styles.btn, styles.correctBtn]}>
                <Text style={styles.btnTxt} onPress={this.answer}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.wrongBtn]}>
                <Text style={styles.btnTxt} onPress={this.answer}>Incorrect</Text>
              </TouchableOpacity>
            </View>)
          }
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt} onPress={() => this.setState({showQuestion: !showQuestion})}>Flip Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  header:{
    padding: 20,
  },
  headerTxt:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  prompt:{
    textAlign: 'center',
    fontSize: 16,
    padding: 20,
  },
  questionHeader:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quiz: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor:'blue',
    borderColor:'darkblue',
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
  btnTxt: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  correctBtn: {
    backgroundColor: 'green',
    borderColor: 'darkgreen',
  },
  wrongBtn: {
    backgroundColor: 'red',
    borderColor: 'darkred'
  }
})

function mapStateToProps(decks, { navigation }){
  const deckName= navigation.state.params.deck
  return{
    deckName,
    decks
  }
}

export default connect(mapStateToProps)(QuizView)
