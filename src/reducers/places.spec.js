import places from './places'

import { ADD_PLACE, DELETE_PLACE, EDIT_PLACE } from '../constants/ActionTypes'
import { BUDAPEST, SHANGHAI, SANDIEGO } from '../constants/Places'

describe('places reducer', () => {
  it('should handle initial state', () => {
    expect(
      places(undefined, {})
    ).toEqual([
      {
        id: 0,
        location: {
          lat: BUDAPEST.lat,
          lon: BUDAPEST.lon
        }
      }
    ])
  })

  it('should handle ADD_PLACE', () => {
    expect(
      places([],
        {
          type: ADD_PLACE,
          location: {
            lat: SHANGHAI.lat,
            lon: SHANGHAI.lon
          }
        }
      )
    ).toEqual(
      [
        {
          id: 0,
          location: {
            lat: SHANGHAI.lat,
            lon: SHANGHAI.lon
          }
        }
      ])

    expect(
      places(
        [
          {
            id: 0,
            location: {
              lat: BUDAPEST.lat,
              lon: BUDAPEST.lon
            }
          }
        ],
        {
          type: ADD_PLACE,
          location: {
            lat: SHANGHAI.lat,
            lon: SHANGHAI.lon
          }
        }
      )
    ).toEqual(
      [
        {
          id: 0,
          location: {
            lat: BUDAPEST.lat,
            lon: BUDAPEST.lon
          }
        },
        {
          id: 1,
          location: {
            lat: SHANGHAI.lat,
            lon: SHANGHAI.lon
          }
        }
      ]
    )

    expect(
      places(
        [
          {
            id: 0,
            location: {
              lat: BUDAPEST.lat,
              lon: BUDAPEST.lon
            }
          },
          {
            id: 1,
            location: {
              lat: SHANGHAI.lat,
              lon: SHANGHAI.lon
            }
          }
        ],
        {
          type: ADD_PLACE,
          location: {
            lat: SANDIEGO.lat,
            lon: SANDIEGO.lon
          }
        }
      )).toEqual(
      [
        {
          id: 0,
          location: {
            lat: BUDAPEST.lat,
            lon: BUDAPEST.lon
          }
        },
        {
          id: 1,
          location: {
            lat: SHANGHAI.lat,
            lon: SHANGHAI.lon
          }
        },
        {
          id: 2,
          location: {
            lat: SANDIEGO.lat,
            lon: SANDIEGO.lon
          }
        }
      ]
    )
  })

  it('should handle DELETE_PLACE', () => {
    expect(
      places(
        [],
        {
          type: DELETE_PLACE,
          id: 0
        }
      )
    ).toEqual(
      []
    )

    expect(
      places(
        [
          {
            id: 0,
            location: {
              lat: BUDAPEST.lat,
              lon: BUDAPEST.lon
            }
          }
        ],
        {
          type: DELETE_PLACE,
          id: 0
        }
      )
    ).toEqual(
      []
    )

    expect(
      places(
        [
          {
            id: 0,
            location: {
              lat: BUDAPEST.lat,
              lon: BUDAPEST.lon
            }
          }
        ],
        {
          type: DELETE_PLACE,
          id: 1
        }
      )
    ).toEqual(
      [
        {
          id: 0,
          location: {
            lat: BUDAPEST.lat,
            lon: BUDAPEST.lon
          }
        }
      ]
    )
  })
})
