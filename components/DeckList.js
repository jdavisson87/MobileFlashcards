import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions/decks'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'


class DeckList extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    fetchDecks()
      .then((decks)=>dispatch(receiveDecks(JSON.parse(decks))))

  }

  render() {
    const { list } = this.props

    return(
      <View style={styles.container}>
        <Text style={styles.header}>DeckList</Text>
        <Text style={{fontSize:24, textAlign:'center'}}>Choose which deck you would like to view</Text>
        <ScrollView style={styles.list}>
          {Object.keys(list).map(deck=>{
            deck=list[deck]
            return(
              <TouchableOpacity key={`${deck.title}1`} style={styles.card} onPress={() => this.props.navigation.navigate(
                'DeckEdit',
                { deck }
              )}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.detail}>Number of Cards: {deck.questions.length} </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
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
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  list: {
    backgroundColor: 'white',
  },
  card: {
    margin: 10,
    alignItems: 'stretch',
    paddingTop: 8,
    paddingBottom: 8,
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
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop:8,
    paddingBottom: 8,
  },
})

function mapStateToProps (state) {
  const list = state.decks
  return{

    list
  }
}


export default connect(mapStateToProps)(DeckList)
