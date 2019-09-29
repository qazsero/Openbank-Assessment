import React, {useState} from 'react'
import styles from './Input.module.scss'

const Input = props => {

  const [visiblePass, showPass] = useState(false)

  const renderError = () => {
    if (props.error) {
      return (
        <span className={styles.error}><i className={`fas fa-exclamation-triangle ${styles.errorIcon}`}></i>{props.error}</span>
      )
    }
  }

  const classes = `${styles.input} ${props.className}`
  const groupclasses = `${styles.group} ${props.groupClassName}`
  let inputType = props.type ? props.type : 'text'
  const placeholder = props.placeholder ? props.placeholder : ''
  const disabled = props.disabled ? true : false

  //Password settings
  let passIcon = ''
  if (visiblePass === true) {
    inputType = 'text'
    passIcon = 'fal fa-eye-slash'
  } else if (visiblePass === false && props.type === 'password') {
    inputType = 'password'
    passIcon = 'fal fa-eye'
  }

  return (
    <div className={groupclasses}>
      <input id={props.id} type={inputType} disabled={disabled} placeholder={placeholder} value={props.value} defaultValue={props.defaultValue} onChange={props.onChange} className={classes} />
      {props.type === 'password' && <i onClick={() => showPass(!visiblePass)} className={`${styles.typePassIcon} ${passIcon}`} />}
      {renderError()}
    </div>
  )
}


export default Input
