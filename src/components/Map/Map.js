import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.css"

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4Ym91cmciLCJhIjoiY2xwdnBsZHppMDZ2aDJxbzlmM2tuNnl4MSJ9.a3zeEuSrSu8_nseifbB_Ag';

export default function Map() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    console.log(position.coords.latitude, position.coords.longitude);
  }

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.3522219);
  const [lat, setLat] = useState(48.856614);
  const [zoom, setZoom] = useState(10);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });


  return (
    <div>
        <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
        
    </div>

  );
}


