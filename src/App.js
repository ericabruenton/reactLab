import React, { Component } from 'react';
import GoogleMap from './GoogleMap'
import Quake from './Quake'

class App extends Component {
  constructor() {
  super();
  this.state = {
    quake: []
  }
 }

  getQuake = async () => {
  try {
    const quake = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson");
    const quakeJson = await quake.json();
    return quakeJson;
    console.log(quakeJson, ' this is quake');
  } catch(err) {
    return err
    console.log(err, ' error in catch block')
  }
}
componentDidMount(){
  this.getQuake().then((data) => {
    console.log(data, ' this is data')
    this.setState({quake: []}) 
  })
} 

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quake">
          <h1>Earthquakes from the past week: </h1>
          ...put Quakes Component here...
            {this.state.quake}
        </div>
      </div>
    );
  }
}

export default App;
