import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('place actions', () => {
  it('addPlace should create ADD_PLACE action', () => {
    expect(actions.addPlace({ lat: 10.0, lon: 15.0 })).toEqual({
      type: types.ADD_PLACE,
      location: { lat: 10.0, lon: 15.0 }
    })
  })

  it('deletePlace should create DELETE_PLACE action', () => {
    expect(actions.deletePlace(1)).toEqual({
      type: types.DELETE_PLACE,
      id: 1
    })
  })

  it('editPlace should create EDIT_PLACE action', () => {
    expect(actions.editPlace(1, { lat: 10.0, lon: 15.0 })).toEqual({
      type: types.EDIT_PLACE,
      id: 1,
      location: { lat: 10.0, lon: 15.0 }
    })
  })
})
