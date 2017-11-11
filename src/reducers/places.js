import { ADD_PLACE, DELETE_PLACE, EDIT_PLACE } from '../constants/ActionTypes'
import { BUDAPEST } from '../constants/Places'

const initialState = [
  {
    id: 0,
    location: {
      lat: BUDAPEST.lat,
      lon: BUDAPEST.lon
    }
  }
]

const places = (state = initialState , action) => {
  switch (action.type) {
    case ADD_PLACE: {
      return [
        ...state,
        {
          id: state.reduce((maxId, place) => Math.max(place.id, maxId), -1) + 1,
          location: action.location
        }
      ]
    }
    case DELETE_PLACE: {
      return state.filter(place =>
        place.id !== action.id
      )
    }
    case EDIT_PLACE: {
      return state.map(place =>
        place.id === action.id ?
          { ...place, location: action.location } :
          place
      )
    }
    default: {
      return state
    }
  }
}

export default places
