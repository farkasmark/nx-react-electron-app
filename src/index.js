import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

import App from './containers/App'

const element = <App title="NEXOGEN React/Redux Test Application" />

ReactDOM.render(
  element,
  document.getElementById('root')
)

registerServiceWorker()
