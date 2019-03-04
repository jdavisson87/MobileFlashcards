import  { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, RECEIVE_CARDS, ADD_CARD, REMOVE_CARD } from '../actions/decks'

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
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards
        }
    case ADD_CARD:
      return {
        ...state,
        [action.card.deckName]:{
            ...state[action.card.deckName],
            questions: state[action.card.deckName].questions.concat([action.card.query])
          }
        }
    default:
      return state
  }
}

export default decks
