import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { addDeck, fetchDecks } from '../utils/api'
import { handleAddDeck } from '../actions/decks'
import { connect } from 'react-redux'

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
    const { dispatch } = this.props
    addDeck(name)
    dispatch(handleAddDeck(name))
    fetchDecks()
    //  .then((entries)=>console.log(entries))
    this.setState({name:''})
    //return to deck list screen
  }

  render(){
    const { name } = this.state
    return(
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={{fontSize:30, color:'blue', textAlign:'center'}}>What is the name of your New Deck</Text>
          <TextInput
            style={{height: 40, width: 350, borderColor:'gray', borderWidth:1, margin: 15, textAlign:'center'}}
            placeholder='Name of New Deck'
            onChangeText={this.handleTitleChange}
            value={name}
          />
          <SubmitBtn onPress={this.submit}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 15
  },
    iosSubmitBtn: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
    backgroundColor: 'purple',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
    submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
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
