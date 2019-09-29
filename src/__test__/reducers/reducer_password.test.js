import passwordReducer from '../../reducers/passwordReducer'
import * as types from '../../actions/types'

describe('>>>R E D U C E R --- Test passwordReducer',()=>{

  const initialState = {
    password: null,
    repeatPassword: null,
    hint: null,
    loading: false,
    success: null
  }

  const payload = {
    password: '123456789A',
    repeatPassword: '123456789A',
    hint: '123456789A',
  }


  it('+++ reducer for initial rendering', () => {
    let state = passwordReducer(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('+++ reducer for SET_PASSWORD_SUCCESS', () => {
    let state = passwordReducer(initialState, {type:types.SET_PASSWORD_SUCCESS, payload})
    expect(state).toEqual({
      ...initialState,
      ...payload,
      success: true
    })
  })

  it('+++ reducer for SET_PASSWORD_FAIL', () => {
    let state = passwordReducer(initialState, {type:types.SET_PASSWORD_FAIL, payload})
    expect(state).toEqual({
      ...initialState,
      ...payload,
      success: false
    })
  })

  it('+++ reducer for RESET_PASSWORD_STATE', () => {
    let state = passwordReducer(initialState, {type:types.RESET_PASSWORD_STATE})
    expect(state).toEqual({
      ...initialState,
      success: null
    })
  })
})
