import { put } from 'redux-saga/effects'
import axios from 'axios'

import { loadDataUASuccess } from './../actions'

function *getUA() {
  const res = yield axios.get('http://httpbin.org/user-agent')
  yield put(loadDataUASuccess(res.data['user-agent']))
}

export default getUA