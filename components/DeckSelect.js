import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import DeckEdit from './DeckEdit'
import { NavigationActions } from 'react-navigation'

export default function DeckSelect ({ deck, onPress }) {
  return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.detail}>Number of Cards:  {deck.questions.length}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

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
