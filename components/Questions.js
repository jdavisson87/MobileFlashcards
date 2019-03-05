import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Questions ({ card }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Q: {card.question}</Text>
      <Text style={styles.answer}>A: {card.answer}</Text>
    </View>
  )
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
  }
})
