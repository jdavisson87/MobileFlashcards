export const RECEIVE_DECKS= 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'


export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

function addDeck ({deck}) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck (name) {
  const key=name
  const deck = {
    title: name,
    questions: [],
  }
  return (dispatch) => {
    dispatch(addDeck({deck}))
  }
}

export function removeD (deck) {
  return {
    type: REMOVE_DECK,
    deck,
  }
}

function addCard (card) {
  return {
    type: ADD_CARD,
    card,
  }
}

export function handleAddCard (deckName, query) {
  const card = {deckName, query}
  //console.log('handleAddCard', card.deckName)
  return (dispatch) => {
    dispatch(addCard(card))
  }
}

export function removeCard (card) {
  return {
    type: REMOVE_CARD,
    card,
  }
}
