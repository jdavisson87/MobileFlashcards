export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

export function receiveCards (cards) {
  return {
    type: RECEIVE_CARDS,
    decks,
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    deck,
  }
}

export function removeCard (card) {
  return {
    type: REMOVE_CARD,
    deck,
  }
}
