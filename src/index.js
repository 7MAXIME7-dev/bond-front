import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import logo from './assets/grape.png'
import './components/Navbar/Navbar.css'
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  return (
    <React.StrictMode>
      <Navbar logo_src={logo} title='Bond.' />
      <Map />
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))




