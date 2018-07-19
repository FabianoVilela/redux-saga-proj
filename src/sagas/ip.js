import { put } from 'redux-saga/effects'
import axios from 'axios'

import { loadDataSuccess } from './../actions'

function *getIP() {
  const res = yield axios.get('http://httpbin.org/ip')
  yield put(loadDataSuccess(res.data.origin))
}

export default getIP