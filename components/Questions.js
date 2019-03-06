import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function Questions ({ deck }) {
  if(deck && deck.questions && deck.questions.length>0){
    return (
      <ScrollView>
        {deck.questions.map(card=>{
            return(
              <View key={card.question} style={styles.container}>
                <Text style={styles.question}>Q: {card.question}</Text>
                <Text style={styles.answer}>A: {card.answer}</Text>
              </View>
            )
          })}
      </ScrollView>
    )
  }else{
    return(
      <View style={styles.textCenter}>
        <Text style={styles.textCenter}>You currently don't have any cards in this deck. Please add cards to this deck.</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    padding: 10,
    margin: 5,
    alignItems: 'stretch',
    backgroundColor: 'lightgray',
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
  question:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  answer:{
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center'
  },
})
