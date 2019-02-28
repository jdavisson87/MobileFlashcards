import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

class AddCard extends Component {
  render(){
    const { deck, deckName } = this.props
    console.log(deck, deckName)
    return(
      <View>
        <View>
          <Text style={styles.prompts}>Please Enter Your Question</Text>
          <TextInput
          style={styles.userInput}
          placeholder='Enter Question'
          />
          <Text style={styles.prompts}>Please Enter Your Answer</Text>
          <TextInput
          style={styles.userInput}
          placeholder='Enter Answer'
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttons}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Submit</Text>
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
  const deckName= navigation.state.params.deck
  const deck = decks.decks[deckName]
  return{
    deck,
    deckName,
  }
}
export default connect (mapStateToProps)(AddCard)
