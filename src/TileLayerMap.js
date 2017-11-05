import React, { Component } from 'react'                                                                
import { Map, TileLayer } from 'react-leaflet'
import elementResizeDetectorMaker from 'element-resize-detector'       

import 'leaflet/dist/leaflet.css'
import './TileLayerMap.css'

export default class TileLayerMap extends Component {                                                          
                                                                                                                                                                                                            
  constructor() {                                                                                              
    super()                                                                                                    
    this.state = {                                                                                             
      lat: 51.505,                                                                                             
      lng: -0.09,                                                                                              
      zoom: 13,
      height: 400                                                                                                 
    }                                                                                                          
  }                                                                                                            
  
  componentWillMount = () => {
  }
                                                                                                               
  componentDidMount = () => {
    this.erd = elementResizeDetectorMaker({ strategy: 'scroll' })
    /* eslint-disable no-underscore-dangle */
    this.erd.listenTo(this.map.leafletElement._container, this.resizeMap.bind(this))                                                                                                                   
  }                                                                                                            
                                                                                                               
  componentWillUnmount = () => {
    this.erd.removeListener(this.map.leafletElement._container, this.resizeMap.bind(this))                                                                                                         
  }
  
  resizeMap = () => {
  	if (this.map) {
    	this.map.leafletElement.invalidateSize(false)
    }
  }                                                                                                            
                                                                                                     
  render = () => {                                                                                                                                                                                              
    const position = [this.state.lat, this.state.lng]                                                                                                                                                              
    return (
      <Map
        ref={el => {
          this.map = el
        }}
        onResize={
          this.resizeMap.bind(this)
        }
        center={position}
        zoom={this.state.zoom}
        style={{ height: this.state.height }}
      >                                                         
        <TileLayer                                                                                           
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"                                           
        />                                                                                                   
      </Map>                                                                                                                                                                                               
    )                                                                                                          
  }                                                                                                            
}                                                                                                              