import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import TileLayerMap from '../components/TileLayerMap'

const App = ({title}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{`Welcome to ${title}`}</h1>
      </header>
      <TileLayerMap/>
    </div>
  )
}

export default App
