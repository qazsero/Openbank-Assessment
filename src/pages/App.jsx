import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {useLocation} from "react-router"
import posed, {PoseGroup} from 'react-pose'

import Info from './Info'
import CreatePassword from './CreatePassword'
import Feedback from './Feedback'
import styles from './App.module.scss'

const RouteContainer = posed.div({
  enter: {opacity: 1, y:0},
  exit: {opacity: 0, y:0}
})

const App = () => {

  const location = useLocation()

  return (
    <div className={styles.wrapper}>
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <Switch location={location}>
            <Route path="/" exact component={Info} />
            <Route path="/create-password" component={CreatePassword} />
            <Route path="/feedback" component={Feedback} />
          </Switch>
        </RouteContainer>
      </PoseGroup>
    </div>
  )
}

export default App
