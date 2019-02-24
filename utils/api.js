import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DECK'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)

}

export function addDeck(name){
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [name]: {
      title: name,
      questions: []
    }
  }))
}

export function removeDeck (deck) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deck] = undefined
      delete data[deck]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}
