import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions/decks'
import { connect } from 'react-redux'

class DeckList extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    fetchDecks()
      .then((decks)=>dispatch(receiveDecks(JSON.parse(decks))))
      .then(()=>console.log('props', this.props))
  }

  render() {
    const { decks } = this.props.decks

    return(
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={{fontSize:34}}>DeckList</Text>
          {Object.keys(decks).map(deck=>{
            return(
              <Text key={deck}>{decks[deck].title}</Text>
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
    padding: 15
  },
  center: {
    flex: 1,
    //justifyContent: 'center',
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


export default connect(mapStateToProps)(DeckList)
