import { all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import getIP from './ip'
import getUA from './ua'

function *index() {
  yield all([
          takeLatest('LOAD_DATA_REQUEST', getIP, axios),
          takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios)
        ])
}

export default index