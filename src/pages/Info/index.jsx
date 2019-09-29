import React, {useState} from 'react'
import {FormattedMessage} from 'react-intl'
import {useHistory} from "react-router"


import Button from '../../components/Button'
import {WizardCard, WizardCardBody, WizardCardFooter} from '../../components/WizardCard'
import styles from './Info.module.scss'


const Info = () => {

  const history = useHistory()
  const [consent, setConsent] = useState(false)

  const leftIcon = require(`../../assets/img/group.svg`)
  const rightIcon = require(`../../assets/img/group-3.svg`)

  const goToNextScreen = () => {
    if (consent === true) {
      history.push('/create-password')
    }
  }

  return (
    <WizardCard hasHeader step={1}>
      <WizardCardBody>
        <h2><FormattedMessage id="app.title" /></h2>

        <div className={styles.twoBlocks}>
          <div>
            <img src={leftIcon} alt="Bloque 1" />
            <p><FormattedMessage id="info.left" /></p>
          </div>
          <div>
            <img src={rightIcon} alt="Bloque 2" />
            <p><FormattedMessage id="info.right" /></p>
          </div>
        </div>

        <div className="row">
          <p className="title"><FormattedMessage id="info.howTitle" /></p>
          <p><FormattedMessage id="info.howDesc" /></p>
        </div>

        <div className="row">
          <p className="title"><FormattedMessage id="info.whatTitle" /></p>
          <p><FormattedMessage id="info.whatDesc" /></p>
        </div>

        <div className="row">
          <p className="title"><FormattedMessage id="info.consentTitle" /></p>
          <p><input type="checkbox" defaultChecked={consent} onClick={e => setConsent(e.target.checked)} id="consent" /> <label htmlFor="consent"><FormattedMessage id="info.consentDesc" /></label></p>
        </div>

      </WizardCardBody>
      <WizardCardFooter>
        <Button isDisabled={!consent} onClick={() => goToNextScreen()}><FormattedMessage id="app.button.continue" /> <i className="fas fa-chevron-right" /> </Button>
        <Button secondary ><FormattedMessage id="app.button.cancel" /></Button>
      </WizardCardFooter>
    </WizardCard>
  )
}

export default Info
