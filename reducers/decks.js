import  { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from '../actions/decks'

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
        [action.deck.title] : action.deck
      }
    case REMOVE_DECK:
      return {
        ...state
      }
    default:
      return state
  }
}

export default decks
