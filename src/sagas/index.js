import { all, takeLatest } from 'redux-saga/effects'
import getIP from './ip'
import getUA from './ua'

function *index() {
  yield all([
          takeLatest('LOAD_DATA_REQUEST', getIP),
          takeLatest('LOAD_DATA_UA_REQUEST', getUA)
        ])
}

export default index