import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions/decks'
import { connect } from 'react-redux'
import DeckSelect from './DeckSelect'

class DeckList extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    fetchDecks()
      .then((decks)=>dispatch(receiveDecks(JSON.parse(decks))))
  }

  render() {
    const { decks } = this.props.decks

    return(
      <View style={styles.container}>
        <Text style={styles.header}>DeckList</Text>
        <Text style={{fontSize:24, textAlign:'center'}}>Choose which deck you would like to view</Text>
        <View style={styles.list}>
          {Object.keys(decks).map(deck=>{
            //console.log('here', deck[deck].title)
            return(
              <View style={styles.list} key={decks[deck].title}>
                <DeckSelect deck={decks[deck]}/>
              </View>
            )
          })}
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'stretch',

  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  list: {
    backgroundColor: 'red',
  }
})

function mapStateToProps (decks) {
  return{
    decks
  }
}


export default connect(mapStateToProps)(DeckList)
