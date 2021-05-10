import { put, takeLatest } from 'redux-saga/effects'
// import fetch from '../../core/fetch'

const initialState = {
}

export const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...data
      }
    case LOGIN_FAILED:
      return {
        ...state,
        error: data
      }
    default:
      return state
  }
}
export const loginAction = (data) => ({ type: LOGIN_REQUESTED, data })

function* loginGenerator(data) {
  const { username, password } = data.data
  try {
    const isLoged = yield fetch(queries.signin, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(username, password ) })
    yield put({ type: LOGIN_SUCCESS, data: isLoged })
  } catch (err) {
    yield put({ type: LOGIN_FAILED, err })
  }
}

export function * loginRootSaga () {
  yield takeLatest(LOGIN_REQUESTED, loginGenerator)
}

const queries = {
  signin: '/api/auth/signin'
  
}

const LOGIN_SUCCESS = 'SET_USER_PROFILE_SUCCESS'
const LOGIN_FAILED = 'SET_USER_PROFILE_FAIL'
const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
