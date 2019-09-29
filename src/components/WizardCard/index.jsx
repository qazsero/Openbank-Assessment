import React from 'react'
import styles from './WizardCard.module.scss'

export const WizardCard = props => {

  const {step, hasHeader} = props

  let classes = `${styles.card} ${props.className || ''}`

  return (
    <React.Fragment>
      {hasHeader && <StepContainer step={step} />}
      <div className={classes} id={props.id || ''}>
        {props.children}
      </div>    
    </React.Fragment>
  )
}

const StepContainer = props => {
  const {step} = props
  return (
    <div className={styles.stepContainer}>
      <ul className={styles.steps}>
        <li className={`${styles.li} ${step === 1 && styles.active}`}>{step > 1 ? <i className="far fa-check" /> : 1}</li>
        <li className={`${styles.li} ${step === 2 && styles.active}`}>{step > 2 ? <i className="far fa-check" /> : 2}</li>
        <li className={`${styles.li} ${step === 3 && styles.active}`}>3</li>
      </ul> 
    </div>
  )
}

export const WizardCardBody = props => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  )
}

export const WizardCardFooter = props => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  )
}
