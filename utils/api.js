import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'MOBILE_FLASHCARDS'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function addDeck(name){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse)
    .then(data =>{
      if(data===null){
        data={}
      }
      data[name] = {title: name, questions: []};
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

export function removeDeck (name) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      delete data[name]
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}
