import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import ip from './ip'
import { loadDataSuccess } from './../actions'


describe('should test ip', () => {
  const axiosMock = {
    get: jest.fn()
  }
  
  const it = sagaHelper(ip(axiosMock))
  it('should call API get', result => {
    expect(result).toEqual(call(axiosMock.get, 'http://httpbin.org/ip'))
    return {
      data: {
        origin: 'My ip'
      }
    }
  })
  
  it('should put loadDataSuccess', result => {
    expect(result).toEqual(put(loadDataSuccess('My ip')))
  })
})