import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.css";
//import usrImg from './grape.png';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  let options;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const mapContainer = useRef(null);
  const map = useRef(null);
  const usrMarker = useRef(null);
  const [lng, setLng] = useState(2.3522219);
  const [lat, setLat] = useState(48.856614);
  const [zoom, setZoom] = useState(10);

  const [usr_lng, setUsrLng] = useState(null);
  const [usr_lat, setUsrLat] = useState(null);
  
  useEffect(() => {
    if (map.current) return;
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

  useEffect(() => {

    function success(pos) {
      const crd = pos.coords;
      setUsrLng(crd.longitude)
      setUsrLat(crd.latitude)
    }

    function error(err) {
      console.error(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    if (usrMarker.current) {
      usrMarker.current.setLngLat([usr_lng, usr_lat]);
    } else {
      usrMarker.current = new mapboxgl.Marker({className: "marker"}).setLngLat([usr_lng, usr_lat]).addTo(map.current);
    }
  });

  useEffect(() => {
    map.current.setCenter({lng: usr_lng, lat: usr_lat});
    map.current.setZoom(14)
  }, [usr_lng, usr_lat]);


  return (
    <div>
        <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
        
    </div>

  );
}
