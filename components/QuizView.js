import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'

class QuizView extends Component {
  state={
    correctAnswers: 0,
    questions:[],
    deckName: '',
    showQuestion: true,
    start: false,
    questionNo: 1,
  }

  componentWillMount(){
    const { deckName, decks } = this.props
    const questions = decks.decks[deckName].questions
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)]
    this.setState({ questions, deckName, currentQuestion })
  }

  wrong = () => {
    const { showQuestion, questionNo, questions, currentQuestion } = this.state
    const newQuestions = questions.filter(q=> q.question !== currentQuestion.question)
    const newCurrent = newQuestions[Math.floor(Math.random() * newQuestions.length)]
    this.setState(state => {
      return {
        ...state,
        questions: newQuestions,
        showQuestion: !showQuestion,
        questionNo: (questionNo+1),
        currentQuestion: newCurrent
      }
    })
  }

  correct = () => {
    const { showQuestion, questionNo, questions, currentQuestion, correctAnswers } = this.state
    const newQuestions = questions.filter(q => q.question !== currentQuestion.question)
    const newCurrent = newQuestions[Math.floor(Math.random() * newQuestions.length)]
    this.setState(state => {
      return {
        ...state,
        questions: newQuestions,
        showQuestion: !showQuestion,
        questionNo: (questionNo+1),
        correctAnswers: (correctAnswers+1),
        currentQuestion: newCurrent
      }
    })
  }

  render(){
    const { deckName, questions, correctAnswers, currentQuestion, showQuestion, start, questionNo } = this.state
    const { decks } = this.props

    if(start===false){
      return(
        <View>
          <Text style={[styles.headerTxt, {paddingTop: 50}]}>Are you ready?</Text>
          <TouchableOpacity style={[styles.btn, styles.correctBtn, {margin: 30}]} onPress={() => this.setState({start: true})}>
            <Text style={styles.btnTxt}>Start</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return decks.decks[deckName].questions.length===0 ? (
        <View>
          <Text style={styles.headerTxt}>{deckName} deck</Text>
          <Text style={styles.prompt}>You currently don't have any cards in this deck. Please go back and add cards to this deck</Text>
        </View>
      )
      : questionNo!== (decks.decks[deckName].questions.length+1) ? (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>{deckName} deck</Text>
          </View>
          <View>
            <Text style={styles.questionHeader}>{showQuestion ? `Question ${questionNo} of ${decks.decks[deckName].questions.length}:`: 'Answer: '}</Text>
            <Text style={styles.quiz}>{showQuestion ? currentQuestion.question : currentQuestion.answer}</Text>
          </View>
          <View>
          {showQuestion ?
            <View>
              <Text style={{textAlign: 'center', fontSize:16}}>Flip the card to see the answer</Text>
              <TouchableOpacity style={styles.btn} onPress={() => this.setState({showQuestion: !showQuestion})}>
                <Text style={styles.btnTxt}>Flip Card</Text>
              </TouchableOpacity>
            </View>
            : (
            <View style={styles.btnContainer}>
              <TouchableOpacity style={[styles.btn, styles.correctBtn]} onPress={this.correct}>
                <Text style={styles.btnTxt}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.wrongBtn]} onPress={this.wrong}>
                <Text style={styles.btnTxt}>Incorrect</Text>
              </TouchableOpacity>
            </View>)
          }

          </View>
        </View>
      )
      : (
        <View>
          <Text style={[styles.headerTxt,{padding: 20}]}>Quiz Completed</Text>
          <Text style={styles.completeTxt}>You got {correctAnswers} out of {decks.decks[deckName].questions.length} correct</Text>
          <Text style={styles.completeTxt}>{((correctAnswers/decks.decks[deckName].questions.length)*100).toFixed(0)}%</Text>
          {((correctAnswers/decks.decks[deckName].questions.length)*100).toFixed(0) >= 70 ?
            <View>
              <Text style={styles.completeTxt}>Keep up the great work!</Text>
            </View>
            : <View>
              <Text style={styles.completeTxt}>Keep studying and you will be the master of this deck!</Text>
            </View>
          }
          <TouchableOpacity style={[styles.btn, styles.correctBtn]} onPress={() => {
              this.props.navigation.goBack()
            }}>
            <Text style={styles.btnTxt}>Go Back to the Deck List</Text>
          </TouchableOpacity>
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
  },
  completeTxt: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    padding: 20,
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
