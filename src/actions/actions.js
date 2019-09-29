import * as types from "./types"
import submitForm from  '../services/api'

export const submitPassword = (pass, repass, optionalQuestion) => async dispatch => {
  dispatch({type:types.SET_PASSWORD})
  try {
    await submitForm(pass, repass, optionalQuestion)
    dispatch({
      type: types.SET_PASSWORD_SUCCESS,
      payload: {
        password:pass, 
        requirePassword: repass, 
        hint: optionalQuestion
      }
    })
  } catch (err) {
    dispatch({
      type: types.SET_PASSWORD_FAIL,
      payload: {
        password:pass, 
        requirePassword: repass, 
        hint: optionalQuestion
      }
    })
  }
}

export const resetPasswordState = ()  => async dispatch => (
  dispatch({type: types.RESET_PASSWORD_STATE})
)
