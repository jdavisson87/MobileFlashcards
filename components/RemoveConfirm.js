import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { removeDeck } from '../utils/api'
import { removeD } from '../actions/decks'

class RemoveConfirm extends Component {

  remove = () => {
    const {deck, goHome, remove} = this.props
    remove()
    goHome()
    removeDeck(deck)
  }

  render(){
    const { deck, list, goBack } = this.props
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.prompt}>Are you sure you want to delete your {deck} deck?</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={this.remove}>
            <Text style={styles.choiceText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={()=>goBack()}>
            <Text style={styles.choiceText}>Cancel</Text>
          </TouchableOpacity>
        </View>
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
  prompt:{
    fontSize: 28,
    textAlign: 'center',
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  confirmButton:{
    margin: 15,
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'lightgreen',
    backgroundColor:'darkgreen',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  choiceText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cancelButton: {
    margin: 15,
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'darkred',
    backgroundColor:'red',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  }
})

function mapStateToProps(state, {navigation}){
  const deck = navigation.state.params.deck
  const list = state.decks
  return{
    list,
    deck
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  const deck  = navigation.state.params.deck
  return {
    remove: ()=> dispatch(removeD(deck)),
    goBack: ()=> navigation.goBack(),
    goHome: () => navigation.navigate(
      'DeckList'
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveConfirm)
