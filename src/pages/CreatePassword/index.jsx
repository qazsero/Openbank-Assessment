import React, {useEffect, useState} from 'react'
import {FormattedMessage, useIntl} from 'react-intl'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from "react-router"

import {submitPassword} from '../../actions/actions'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {WizardCard, WizardCardBody, WizardCardFooter} from '../../components/WizardCard'
import ConfirmPasswordSchema from '../../schemas/confirmPasswordSchema'
import styles from './CreatePassword.module.scss'

const CreatePassword = () => {

  const defaultFormError = {
    pass:null,
    repeatPass: null,
    hint: null
  }

  const [pass, setPass] = useState('')
  const [repeatPass, setRepeatPass] = useState('')
  const [hint, setHint] = useState('')
  const [formError, setFormError] = useState(defaultFormError)

  const intl = useIntl()
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    password: storePass, 
    repeatPassword: storeRepeatPass, 
    hint: storeHint,
    loading: storeLoading,
    success: storeSuccess
  } = useSelector(state => ({
    password: state.password.password,
    repeatPassword: state.password.repeatPassword,
    hint: state.password.hint,
    loading: state.password.loading,
    success: state.password.success,
  }))

  // Our local state is the source of truth
  // If there is data in the store, apply it 
  // to the local state
  useEffect(() => {
    if (storePass && storePass !== pass && pass ==='') setPass(storePass)
    if (storeRepeatPass && storeRepeatPass !== repeatPass && repeatPass ==='') setRepeatPass(storeRepeatPass)
    if (storeHint && storeHint !== hint && hint ==='') setHint(storeHint)
  },[storePass, storeRepeatPass, storeHint, pass, repeatPass, hint])

  //If the password has been submitted go to next page
  useEffect(() => {
    if (storeSuccess !== null) history.push('/feedback')
  },[history, storeSuccess])

  const validatePassword = async () => {
    setFormError(defaultFormError)
    try {
      //Validacion de campos
      await ConfirmPasswordSchema.validate({pass, repeatPass, hint}, {abortEarly: false})
      //Si es valido guardalo
      dispatch(submitPassword(pass,repeatPass,hint))
    } catch (err) {
      if (err.name === 'ValidationError') {
        // Mapeo de una lista de errores a
        // Un objeto de un error por key (nombre campo)
        let errors = {}
        err.inner.forEach(one => {
          errors = {...errors, [one.path]: one.message}
        })
        setFormError({...errors})
      }
    }
  }


  return (
    <WizardCard hasHeader step={2}>
      <WizardCardBody>
        <h2><FormattedMessage id="app.title" /></h2>

        <div className="row">
          <p><FormattedMessage id="cpass.intro" /></p>
        </div>

        <div className={styles.splitRow}>
          <div className={styles.halfInput}>
            <label className="title" htmlFor="pass"><FormattedMessage id="cpass.createP" /></label>
            <Input 
              id="pass" 
              type="password" 
              error={formError.pass} 
              placeholder={intl.formatMessage({id:'cpass.createP'})}
              onChange={e => setPass(e.target.value)} 
              value={pass}
            />
          </div>

          <div className={styles.halfInput}>
            <label className="title" htmlFor="pass"><FormattedMessage id="cpass.repeatMasterP" /></label>
            <Input 
              id="repeatPass" 
              type="password" 
              error={formError.repeatPass} 
              placeholder={intl.formatMessage({id:'cpass.repeatP'})}
              onChange={e => setRepeatPass(e.target.value)}  
              value={repeatPass}
            />
          </div>
        </div>

        <div className="row">
          <p className={styles.youCan}><FormattedMessage id="cpass.youCan" /></p>
          <label className="title" htmlFor="hint"><FormattedMessage id="cpass.createHint" /></label>
          <Input 
            id="hint" 
            error={formError.hint} 
            placeholder={intl.formatMessage({id:'cpass.hint'})}
            onChange={e => setHint(e.target.value)} 
            value={hint}
          />
        </div>

      </WizardCardBody>
      <WizardCardFooter>
        <Button 
          onClick={() => validatePassword()} 
          isLoading={storeLoading}
        >
          {!storeLoading ? (
            <React.Fragment>
              <FormattedMessage id="app.button.continue" />
              <i className="fas fa-chevron-right" />
            </React.Fragment>
          ) : (
            <FormattedMessage id="app.button.loading" />
          )} 
        </Button>
        <Button 
          secondary 
          onClick={() => history.push('/')}
        >
          <FormattedMessage id="app.button.cancel" />
        </Button>
      </WizardCardFooter>
    </WizardCard>
  )
}

export default CreatePassword
