import  { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD, REMOVE_CARD } from '../actions/decks'

function decks (state={}, action) {
  switch(action.type){
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck
      }
    case REMOVE_DECK:
      const newState = state
      delete newState[action.deck]
      return {
        ...newState
      }
    case ADD_CARD:
      return {
        ...state,
        [action.card.deckName]:{
            ...state[action.card.deckName],
            questions: [...state[action.card.deckName].questions, action.card.query]
          }
        }
    default:
      return state
  }
}

export default decks
