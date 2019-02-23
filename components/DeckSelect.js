import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'

export default function DeckSelect ({ deck }) {
  return (
    <TouchableOpacity>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>Number of Cards: {deck.questions.length}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  cards: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop:8,
  }
})
