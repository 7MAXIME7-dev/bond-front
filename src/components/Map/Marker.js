import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {






  return (
    <div>
        <div ref={mapContainer} className="map-container" />   
    </div>

  );
}
