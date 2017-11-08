import * as types from '../constants/ActionTypes'

export const addPlace = location => ({ type: types.ADD_PLACE, location })
export const deletePlace = id => ({ type: types.DELETE_PLACE, id })
export const editPlace = (id, location) => ({ type: types.EDIT_PLACE, id, location })