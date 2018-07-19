import { put, call } from 'redux-saga/effects'

import { loadDataSuccess } from './../actions'

function *getIP(axios) {
  const res = yield call(axios.get, 'http://httpbin.org/ip')
  yield put(loadDataSuccess(res.data.origin))
}

export default getIP