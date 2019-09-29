import * as types from "../actions/types"

const initialState = {
  password: null,
  repeatPassword: null,
  hint: null,
  loading: false,
  success: null
}

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_PASSWORD:
    return  {...state, loading: true}
  case types.SET_PASSWORD_SUCCESS:
    return  {
      ...state, 
      password: action.payload.password,
      repeatPassword: action.payload.repeatPassword,
      hint: action.payload.hint,
      loading: false,
      success: true
    }
  case types.SET_PASSWORD_FAIL:
    return {
      ...state, 
      password: action.payload.password,
      repeatPassword: action.payload.repeatPassword,
      hint: action.payload.hint,
      loading: false,
      success: false
    }
  case types.RESET_PASSWORD_STATE:
    return {
      ...state,
      success: null
    }
  default: 
    return state
  }
}

export default passwordReducer
