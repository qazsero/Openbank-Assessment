import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/actions'
import * as types from '../../actions/types'

const middlewares = [thunk]
const mockStore   = configureMockStore(middlewares)

describe('ACTIONS => ASPSP => SUBMIT PASSWORD', () => {
  const password= '123456789A'
  const repeatPassword= '123456789A'
  const hint= '123456789A'
  const badPassword= 'pruebaKO123'

  const payload = {
    password, repeatPassword, hint
  }

  const badPayload = {
    password: badPassword, repeatPassword: badPassword, hint
  }

  it('creates an action to submit successfully a password', () => {

    const expectedActions = [{type: types.SET_PASSWORD},{type: types.SET_PASSWORD_SUCCESS, payload}]

    const store = mockStore({password:{}})

    return store.dispatch(actions.submitPassword(password, repeatPassword, hint)).then(() => {
      const returnedActions = store.getActions()
      expect(returnedActions).toEqual(expectedActions)
    })
  })

  it('creates an action to submit unsuccessfully a password', () => {

    const expectedActions = [{type: types.SET_PASSWORD},{type: types.SET_PASSWORD_FAIL, payload: badPayload}]

    const store = mockStore({password:{}})

    return store.dispatch(actions.submitPassword(badPassword, badPassword, hint)).then(() => {
      const returnedActions = store.getActions()
      expect(returnedActions).toEqual(expectedActions)
    })
  })
})

describe('ACTIONS => ASPSP => RESET PASSWORD STATE', () => {
  it('creates an action to reset the password', () => {
    const expectedAction = {type: types.RESET_PASSWORD_STATE}
    expect(actions.resetPasswordState()).toEqual(expectedAction)
  })
})
