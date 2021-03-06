import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native'
import { addDeck, fetchDecks } from '../utils/api'
import { handleAddDeck } from '../actions/decks'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'


function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class NewDeck extends Component {

  state={
    name: ''
  }

  handleTitleChange = (name) =>{
    this.setState({ name })
  }

  submit = () => {
    const { name } = this.state
    const { dispatch, decks } = this.props
    if(name.trim()===''){
      alert('Please enter a deck name')

    }else if(Object.keys(decks.decks).includes(name.trim())){
      alert('You already have a deck with this name.  Please enter a new name')
      this.setState({name: ''})

    }else{
      dispatch(handleAddDeck(name))
      addDeck(name)
        .then(()=> this.toHome(name))
      this.setState({name:''})
    }
  }

  toHome = (name) => {
    const { decks } = this.props
    const deck = decks.decks[name]
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckEdit',
      params: { deck },
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render(){
    const { name } = this.state
    const { decks } = this.props

    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.center}>
          <Text style={{fontSize:30, color:'black', textAlign:'center'}}>What is the name of your New Deck</Text>
          <TextInput
            style={{height: 40, width: 320, borderColor:'gray', borderWidth:1, margin: 15, textAlign:'center'}}
            placeholder='Name of New Deck'
            onChangeText={this.handleTitleChange}
            value={name}
          />
          <SubmitBtn onPress={this.submit}/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
    iosSubmitBtn: {
    backgroundColor: 'green',
    borderColor: 'darkgreen',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
    backgroundColor: 'green',
    borderColor: 'darkgreen',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,

  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }
})

function mapStateToProps (decks) {
  return{
    decks
  }
}

export default connect(mapStateToProps)(NewDeck)
