import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import ua from './ua'
import { loadDataUASuccess } from './../actions'


describe('should test ua', () => {
  const axiosMock = {
    get: jest.fn()
  }
  
  const it = sagaHelper(ua(axiosMock))
  it('should call API get', result => {
    expect(result).toEqual(call(axiosMock.get, 'http://httpbin.org/user-agent'))
    return {
      data: {
        'user-agent': 'My user-agent'
      }
    }
  })
  
  it('should return user agent', result => {
    expect(result).toEqual(put(loadDataUASuccess('My user-agent')))
  })
})