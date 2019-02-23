export const RECEIVE_DECKS= 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck (name) {
  return (dispatch) => {
    const deck = {
      title: name,
      questions: [],
    }
    dispatch(addDeck(deck))
  }
}

export function removeDeck (deck) {
  return {
    type: REMOVE_DECK,
    deck,
  }
}
