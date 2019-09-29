import React, {useEffect} from 'react'
import {FormattedMessage} from 'react-intl'
import {useSelector, useDispatch} from 'react-redux'

import {Link} from 'react-router-dom'

import {resetPasswordState} from '../../actions/actions'
import {WizardCard, WizardCardBody, WizardCardFooter} from '../../components/WizardCard'
import styles from './Feedback.module.scss'


const Feedback = () => {
  const dispatch = useDispatch()

  const {success} = useSelector(state => ({
    success: state.password.success
  }))

  //When the hook unmounts, reset the status of the submission
  useEffect(() => {
    return () => dispatch(resetPasswordState())
  }, [dispatch])


  switch (success) {
  case true:
    return PositiveFeedback()
  default:
    return NegativeFeedback()
  }
}

const PositiveFeedback = () => {
  return (
    <WizardCard step={3}>
      <WizardCardBody>
        <div className={styles.message}>
          <div className={styles.icon}>
            <i className="fal fa-check-circle" />
          </div>
          <div>
            <h2><FormattedMessage id="feedback.success.title" /></h2>
            <p><FormattedMessage id="feedback.success.desc" /></p>
          </div>
        </div>
      </WizardCardBody>
      <WizardCardFooter>
        <Link className={styles.link} to="/"><FormattedMessage id="feedback.success.link" /> <i className="fas fa-chevron-right" /></Link>
      </WizardCardFooter>
    </WizardCard>
  )
}

const NegativeFeedback = () => {
  return (
    <WizardCard step={3}>
      <WizardCardBody>
          
        <div className={styles.message}>
          <div className={styles.icon}>
            <i className="fal fa-exclamation-triangle" />
          </div>
          <div>
            <h2><FormattedMessage id="feedback.error.title" /></h2>
            <p><FormattedMessage id="feedback.error.desc" /></p>
          </div>
        </div>

      </WizardCardBody>
      <WizardCardFooter>
        <Link className={styles.link} to="/"><FormattedMessage id="feedback.error.link" /> <i className="fas fa-chevron-right" /></Link>
      </WizardCardFooter>
    </WizardCard>
  )
}

export default Feedback
