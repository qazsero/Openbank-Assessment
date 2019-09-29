import React from 'react'
import styles from './Button.module.scss'


const Button = props => {
  let classes = `${styles.button}`
  let disabled = false
  let onClick = null
  let loadingIcon = ''

  if (props.secondary) classes = `${classes} ${styles.secondary}`
  if (props.className) classes = `${classes} ${props.className}`

  if (props.isDisabled) {
    disabled = true
    classes =  `${classes} ${styles.disabled}`
  }

  if (props.isLoading) {
    disabled = true
    classes =  `${classes} ${styles.loading}`
    loadingIcon = <i className="fal fa-sync fa-spin" />
  }

  if (props.onClick) {
    onClick = props.onClick
  }
    
  return (
    <button className={classes} onClick={onClick} disabled={disabled} >{props.children} {loadingIcon}</button>
  )
}

export default Button
