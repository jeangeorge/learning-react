import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'

function* getData(action) {
  const response = yield call(axios.get(),'http://sage.saude.gov.br/paineis/aqt/lista_farmacia.php?output=json&')

  yield put({type: 'TESTE', payload: { text: response } })
}

export default function* root() {
  yield [
    takeLatest('ASYNC_TESTE',getData)
  ];
}